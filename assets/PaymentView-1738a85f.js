import{P as a}from"./ProgressbarComponent-541e3821.js";import{_ as i,d as r,e as s,f as _,F as u,l as m,k as p,t as o,n as h,z as b,c as f,o as d}from"./index-b45728a9.js";const y={data(){return{order:{user:{email:"",name:"",tel:"",address:""}},orderId:""}},components:{ProgressbarComponent:a},computed:{},methods:{getOrder(){this.$route.params.orderId},payOrder(){this.orderId=this.$route.params.orderId}},mounted(){this.getOrder()}},g={class:"container"},v={class:"row justify-content-center py-10"},w={class:"col-sm-10 col-lg-8"},x={class:"row"},C={class:"col-md-7"},k={class:"py-2 py-md-4"},P=s("h2",{class:"fs-5 fw-bold mb-2"},"訂購商品",-1),O={class:"table-wrapper"},V={class:"table fs-7"},I=["src","alt"],N={class:"col-6"},B={class:"col-3 text-end"},j={class:"col-md-5"},z={class:"p-2 p-md-4 border rounded-3 bg-secondary-100"},E=s("h2",{class:"fs-5 fw-bold mb-2"},"訂單資訊",-1),F={class:"table fs-7 mb-0"},S=s("th",{width:"100"},"Email",-1),q=s("th",null,"姓名",-1),D=s("th",null,"收件人電話",-1),L=s("th",null,"收件人地址",-1),M=s("th",null,"付款狀態",-1),T={class:"col-md-10 d-flex justify-content-end mt-6"};function U(A,n,G,H,t,l){const c=f("ProgressbarComponent");return d(),r("div",g,[s("div",v,[_(c,{currentStatus:3}),s("div",w,[s("div",x,[s("div",C,[s("div",k,[P,s("div",O,[s("table",V,[s("tbody",null,[t.order.products?(d(!0),r(u,{key:0},m(t.order.products,e=>(d(),r("tr",{class:"align-middle",key:e.id},[s("td",null,[s("img",{src:e.product.imageUrl["300w"],class:"cart-image",alt:e.product.title},null,8,I)]),s("td",N,o(e.product.title)+" x"+o(e.qty),1),s("td",B," NT$ "+o(e.product.price),1)]))),128)):p("",!0)])])])])]),s("div",j,[s("div",z,[E,s("table",F,[s("tbody",null,[s("tr",null,[S,s("td",null,o(t.order.user.email),1)]),s("tr",null,[q,s("td",null,o(t.order.user.name),1)]),s("tr",null,[D,s("td",null,o(t.order.user.tel),1)]),s("tr",null,[L,s("td",null,o(t.order.user.address),1)]),s("tr",null,[M,s("td",{class:h(t.order.is_paid?"success":"warning")},o(t.order.is_paid?"已付款":"未付款"),3)])])])])])])]),s("div",T,[s("button",{class:"btn btn-orange-998-500 ms-2 text-light fw-bold",onClick:n[0]||(n[0]=b((...e)=>l.payOrder&&l.payOrder(...e),["prevent"]))}," 確認付款 ")])])])}const Q=i(y,[["render",U]]);export{Q as default};
