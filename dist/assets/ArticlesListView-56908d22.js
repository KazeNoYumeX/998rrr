import{_ as A,m as f,a as v,d as s,f as l,e as o,h as a,F as c,q as y,b as d,u as m,o as i,w as k,t as x}from"./index-81817b2a.js";import{u as p}from"./articleStore-89776960.js";import{B}from"./BannerComponent-00114175.js";const L={components:{BannerComponent:B},data(){return{pageNum:1,slicedArticles:[]}},computed:{...f(p,["page","isLoading","fullPage","storedAllArticles"])},methods:{...v(p,["get10Articles","getAllArticles","getStoredAllArticles","handleArticles"]),async onScroll(){if(!(this.pageNum>this.page.total_pages)&&window.innerHeight+window.scrollY>=document.body.offsetHeight){const t=(this.pageNum-1)*10,n=t+10,r=this.storedAllArticles.slice(t,n);this.slicedArticles.push(...r),this.pageNum++}}},async mounted(){await this.handleArticles(),this.slicedArticles=this.storedAllArticles.slice(0,10),this.pageNum++,window.addEventListener("scroll",this.onScroll)}},N={class:"container py-5 py-md-10"},$={"transition-duration":"0.3s","item-selector":".item",class:"row"},b=["src","srcset"],S={class:"fs-6 fw-bold mt-2"};function C(t,n,r,V,u,D){const _=d("BannerComponent"),g=d("RouterLink"),h=m("masonry-tile"),w=m("masonry");return i(),s(c,null,[l(_,{title:"精選文章",subtitle:"Featured Articles","image-name":"banner-article.webp","image-alt":"'精選文章"}),o("div",N,[a((i(),s("div",$,[(i(!0),s(c,null,y(u.slicedArticles,e=>a((i(),s("div",{class:"item col-sm-6 col-md-4 col-lg-3 mt-4",key:e.id},[l(g,{class:"text-dark hover-link",to:`/article/${e.id}`},{default:k(()=>[o("img",{class:"img-fluid rounded-3",src:e.image["600w"],alt:"首圖",srcset:`${e.image["300w"]} 300w, ${e.image["600w"]} 600w, ${e.image["1000w"]} 1000w`},null,8,b),o("h2",S,x(e.title),1)]),_:2},1032,["to"])])),[[h]])),128))])),[[w,t.containerId]])])],64)}const H=A(L,[["render",C]]);export{H as default};
