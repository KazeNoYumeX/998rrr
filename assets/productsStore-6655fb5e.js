import{s}from"./index-7f424c35.js";const l=s("productsStore",{state:()=>({isFirstLoad:!0,products:[],allProducts:[],categories:["全部商品"],currentCategory:"全部商品",pageNum:1,pagination:{},followList:[],recommendProducts:[],isLoading:!1,fullPage:!0}),actions:{async getProducts(t=1){this.isLoading=!0,this.isLoading=!1},async getAllProducts(){this.isLoading=!0,this.isLoading=!1},scrollToProductsBlock(){const t=document.querySelector("#products-block");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},changeCategory(t){this.currentCategory!==t&&(this.currentCategory=t,this.getProducts())},toggleFollowProduct(t){if(this.followList.includes(t)){const o=this.followList.indexOf(t);this.followList.splice(o,1)}else this.followList.push(t);localStorage.setItem("followList",JSON.stringify(this.followList))},getFollowList(){const t=localStorage.getItem("followList");this.followList=JSON.parse(t)||[]}}});export{l as u};