import{v as e}from"./index-041fce4e.js";const s=e("useArticleStore",{state:()=>({articles:[],page:{},allArticles:[],storedAllArticles:[],isLoading:!1,fullPage:!0}),actions:{async handleArticles(){this.storedAllArticles.length===0&&(await this.get10Articles(),await this.getAllArticles()),this.getStoredAllArticles()},async get10Articles(t=1){this.isLoading=!0,this.isLoading=!1},async getAllArticles(){this.allArticles=[];for(let t=1;t<=this.page.total_pages;t++)await this.get10Articles(t);localStorage.setItem("allArticles",JSON.stringify(this.allArticles))},getStoredAllArticles(){const t=localStorage.getItem("allArticles");this.storedAllArticles=JSON.parse(t)||[]}}});export{s as u};