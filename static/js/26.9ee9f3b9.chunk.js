(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[26],{158:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),o=a(16),l=a(15),c=a(0),i=a.n(c),u=a(1),p=a(8),s=a(80),d=a(71),m={_id:1,title:"Google Pixel - Black",img:"https://salt.tikicdn.com/cache/200x200/ts/product/ad/35/4c/a01688d9a2e7ad7e21907a51a4ca0168.jpg",price:10,company:"google",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,type:"phone",total:0},h=a(33),f=a.n(h),b=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleGetDetail=function(e){var t=r.state.storeProducts.find((function(t){return t._id===e}));r.setState({detailProduct:t})},r.handleAddCart=function(e){var t=r.state.storeProducts.find((function(t){return t._id===e}));console.log("productID: "+e),console.log(r.state.storeProducts);var a=r.state.cart;!1===t.inCart&&(t.inCart=!0,t.count=1,t.total=t.price,a.push(t),r.handleUpdateTotal()),r.setState({cart:a})},r.handleChangeNumber=function(e,t){var a=r.state.storeProducts.find((function(t){return t._id===e})),n=r.state.cart,o=t.target.value;a.count=parseInt(o,10),a.total=o*a.price,r.handleUpdateTotal(),r.setState({cart:n})},r.handleRemoveItem=function(e){var t=r.state.storeProducts.find((function(t){return t._id===e}));t.inCart=!1,t.count=0,t.total=0;var a=r.state.cart.filter((function(t){return t._id!==e}));r.setState({cart:a}),r.handleUpdateTotal()},r.handleUpdateTotal=function(){var e=0;r.state.cart.forEach((function(t){e+=t.price*t.count})),r.setState({total:e})},r.state={storeProducts:[],detailProduct:m,hotTrend:[],cart:[],total:0,update:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/productlist").then((function(t){0==e.state.update&&(t.data.forEach((function(e){e.inCart=!1,e.total=0,e.count=0})),e.setState({storeProducts:t.data}),e.setState({hotTrend:[t.data[0],t.data[8],t.data[4],t.data[2]]}),e.setState({update:!0}))}))}},{key:"render",value:function(){return i.a.createElement(d.a.Provider,{value:{storeProducts:this.state.storeProducts,detailProduct:this.state.detailProduct,cart:this.state.cart,hotTrend:this.state.hotTrend,total:this.state.total,handle:{addCart:this.handleAddCart,getDetail:this.handleGetDetail,updateTotal:this.handleUpdateTotal,removeItem:this.handleRemoveItem,changeNumber:this.handleChangeNumber}}},this.props.children)}}]),a}(c.Component),v=a(18),y=a(85),g={items:[{name:"LIST PTODUCTS",url:"/app/productList",icon:"fas fa-align-left",badge:{variant:"info",text:"NEW"}},{title:!0,name:"electronic device",wrapper:{element:"",attributes:{}},className:"text-primary"},{name:"Laptop",url:"/app/e-device/laptop",icon:"fas fa-laptop"},{name:"Smart phone",url:"/app/e-device/smart-phone",icon:"fas fa-mobile-alt"},{name:"Accessories",url:"/app/e-device/accessories",icon:"fas fa-ear-muffs"},{name:"TV",url:"/app/e-device/tivi",icon:"fas fa-tv"},{name:"Dryer",url:"/app/e-device/dryer",icon:"fas fa-dryer"},{name:"Camera",url:"/app/e-device/camera",icon:"fas fa-camera"},{title:!0,name:"LIFE SHOP",wrapper:{element:"",attributes:{}},className:"mt-1 text-primary"},{name:"Household appliances",url:"/app/life-shop/hh-appliances",icon:"fas fa-home-alt"},{name:"Food",url:"/app/life-shop/food",icon:"fas fa-burger-soda"},{name:"Book",url:"/app/life-shop/book",icon:"fas fa-book"},{name:"Toy",url:"/app/life-shop/toy",icon:"fas fa-child"}]},E=i.a.lazy((function(){return a.e(18).then(a.bind(null,164))})),k=i.a.lazy((function(){return a.e(19).then(a.bind(null,165))})),P=i.a.lazy((function(){return a.e(24).then(a.bind(null,147))})),T=i.a.lazy((function(){return a.e(11).then(a.bind(null,148))})),C=i.a.lazy((function(){return a.e(12).then(a.bind(null,149))})),S=i.a.lazy((function(){return a.e(8).then(a.bind(null,150))})),x=i.a.lazy((function(){return a.e(9).then(a.bind(null,151))})),z=i.a.lazy((function(){return a.e(10).then(a.bind(null,152))})),O=[{path:"/app",exact:!0,name:"Home",component:E},{path:"/app/productList",name:"ProductList",component:E},{path:"/app/cart",name:"Cart",component:k},{path:"/app/detail",name:"Detail",component:P},{path:"/app/e-device/laptop",name:"Laptop",component:T},{path:"/app/e-device/tivi",name:"Tivi",component:i.a.lazy((function(){return a.e(13).then(a.bind(null,153))}))},{path:"/app/e-device/camera",name:"Camera",component:x},{path:"/app/e-device/dryer",name:"Dryer",component:z},{path:"/app/e-device/accessories",name:"Accessories",component:S},{path:"/app/e-device/smart-phone",name:"Phone",component:C},{path:"/app/life-shop/book",name:"Book",component:i.a.lazy((function(){return a.e(14).then(a.bind(null,154))}))},{path:"/app/life-shop/food",name:"Food",component:i.a.lazy((function(){return a.e(15).then(a.bind(null,155))}))},{path:"/app/life-shop/hh-appliances",name:"HHAppliances",component:i.a.lazy((function(){return a.e(16).then(a.bind(null,156))}))},{path:"/app/life-shop/toy",name:"Toy",component:i.a.lazy((function(){return a.e(17).then(a.bind(null,157))}))}],j=i.a.lazy((function(){return a.e(25).then(a.bind(null,159))})),D=i.a.lazy((function(){return a.e(21).then(a.bind(null,143))})),L=i.a.lazy((function(){return Promise.all([a.e(4),a.e(20)]).then(a.bind(null,144))})),N=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},e}return Object(r.a)(a,[{key:"signOut",value:function(e){var t=this;e.preventDefault(),v.a.logout((function(){t.props.history.push("/")}))}},{key:"render",value:function(){var e=this;return i.a.createElement(b,null,i.a.createElement("div",{className:"app"},i.a.createElement(y.e,{fixed:!0},i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(L,{onLogout:function(t){return e.signOut(t)}}))),i.a.createElement("div",{className:"app-body"},i.a.createElement(y.g,{fixed:!0,display:"lg"},i.a.createElement(y.j,null),i.a.createElement(y.i,null),i.a.createElement(c.Suspense,null,i.a.createElement(y.l,Object.assign({navConfig:g},this.props,{router:p}))),i.a.createElement(y.h,null),i.a.createElement(y.k,null)),i.a.createElement("main",{className:"main"},i.a.createElement(y.c,{appRoutes:O,router:p}),i.a.createElement(s.a,{fluid:!0},i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(u.g,null,O.map((function(e,t){return e.component?i.a.createElement(u.d,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return i.a.createElement(e.component,t)}}):null})))))),i.a.createElement(y.a,{fixed:!0},i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(j,null)))),i.a.createElement(y.d,null,i.a.createElement(c.Suspense,{fallback:this.loading()},i.a.createElement(D,null)))))}}]),a}(c.Component);t.default=N},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext();t.a=r}}]);
//# sourceMappingURL=26.9ee9f3b9.chunk.js.map