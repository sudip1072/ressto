import React, { Component } from "react";
import { linkData } from "./linkData";
import { SocialData } from "./socialData";
//import { items } from "./menuData";
import { client } from "./contentful";

// Creates a Context object.
const MenuContext = React.createContext();

//Every Context object comes with a Provider
//React component that allows consuming components to subscribe to context changes and accepts value props

class MenuProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    cart: [],
    links: linkData,
    socialIcons: SocialData,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeMenus: [],
    filterMenus: [],
    featuredMenus: [],
    singleMenu: {},
    loading: true,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    category: "all",
    delivery: false
  };

  componentDidMount() {
    //from contentful items

    client
      .getEntries({
        content_type: "restaumenus"
      })
      .then(response => this.setMenus(response.items))
      .catch(err => console.log(err));

    // we are passing imported items to setMenus and we called setMenus to lifecycle i.e componentDidMount

    // this.setMenus(items);
  }

  //setMenus function is created and we passed menus to it
  setMenus = menus => {
    let storeMenus = menus.map(item => {
      // destructure item.sys to id so that we can access id directly instead of item.sys.id in menuData
      const { id } = item.sys;
      // access image from menuData which equals to image and now on we access image directly
      const image = item.fields.image.fields.file.url;
      // pass value of id , all fileds and image to the menu variable
      const menu = {
        id,
        ...item.fields,
        image
      };
      // just return to get whole menu
      return menu;
    });

    //now we will filter featured menu
    // we filtered featured items(featured:true in menuData file) from storeMenus and stored in featuredMenus variable
    let featuredMenus = storeMenus.filter(item => item.featured === true);

    // get max price
    let maxPrice = Math.max(...storeMenus.map(item => item.price));

    // set the state of all variables as below where  filterProducts: storeMenus
    //call back the addTotal
    this.setState(
      {
        storeMenus,
        filterMenus: storeMenus,
        featuredMenus,
        cart: this.getStorageCart(),
        singleMenu: this.getStorageMenu(),
        loading: false,
        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };

  //get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  //get menus from local storage
  getStorageMenu = () => {
    return localStorage.getItem("singleMenu")
      ? JSON.parse(localStorage.getItem("singleMenu"))
      : {};
  };

  //get Totals(set this after addToCart)
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    //get the cart values from state and loop it to get each cart values
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  //add Totals(set this after getTotals)
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  //sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //add to cart (first set this)
  addToCart = id => {
    // let store all cart values in the state in tempCart
    let tempCart = [...this.state.cart];
    // let store all Menus stored in storeMenus  in the state in tempMenus
    let tempMenus = [...this.state.storeMenus];
    // find each id of each menu item from tempCart(in cart) and stored in tempItem
    let tempItem = tempCart.find(item => item.id === id);
    // if no item present in cart
    if (!tempItem) {
      //  if no item present in cart then find menus from tempMenus(or indirectly from storeMenus)
      tempItem = tempMenus.find(item => item.id === id);
      // total equals to price of each menus found from temp items
      let total = tempItem.price;
      //then update cartItems
      let cartItem = {
        //state of all menus passed to cartItem
        ...tempItem,
        count: 1,
        total
      };
      //update tempcart with all menus in cart and update cartItems
      tempCart = [...tempCart, cartItem];
    } else {
      // item present in cart then we can also inscrease count
      tempItem.count++;
      //update tempItem total
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    // set state of cart to tempCart
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  //set single product
  setSingleMenu = id => {
    let menu = this.state.storeMenus.find(item => item.id === id);
    localStorage.setItem("singleMenu", JSON.stringify(menu));
    this.setState({
      singleMenu: { ...menu },
      loading: false
    });
  };

  // if handleSidebar is executed sidebarOpen becomes opposite i.e true which makes open sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  // if handleCart is executed  sidebarOpen becomes opposite i.e true which makes open cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  // if closeCart is executed which makes close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  // if openCart is executed which makes close cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  //cart functionality
  //increment
  increment = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //decrement
  decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  //removeItem
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //handle filtering
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };

  sortData = () => {
    const { storeMenus, price, category, delivery, search } = this.state;

    let tempPrice = parseInt(price);

    let tempMenus = [...storeMenus];
    //filtering based on price
    tempMenus = tempMenus.filter(item => item.price <= tempPrice);
    //filtering based on category
    if (category !== "all") {
      tempMenus = tempMenus.filter(item => item.category === category);
    }

    // filtering based on delivery
    if (delivery) {
      tempMenus = tempMenus.filter(item => item.freeDelivery === true);
    }
    // filtering based on search
    if (search.length > 0) {
      tempMenus = tempMenus.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
      });
    }

    this.setState({
      filterMenus: tempMenus
    });
  };

  render() {
    return (
      <MenuContext.Provider
        value={{
          ...this.state, // passing all props in state through spread operator
          handleSidebar: this.handleSidebar, //passing handleSidebar
          handleCart: this.handleCart, //passing handleCart
          openCart: this.openCart, //passing openCart
          closeCart: this.closeCart, //passing openCart
          addToCart: this.addToCart,
          setSingleMenu: this.setSingleMenu,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </MenuContext.Provider> //passing all props to all childrens
    );
  }
}

//consumer is created. all props will be accessed through consumers
const MenuConsumer = MenuContext.Consumer;

export { MenuProvider, MenuConsumer };
