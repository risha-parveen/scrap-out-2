let accept_btn=document.getElementById('accept-btn');
let deny_btn=document.getElementById('deny-btn');
let to_be_cnfm_orders_div=document.getElementById('to-be-cnfm-orders');
let cnfrmed_orders_div=document.getElementsByClassName('confirmed-div')
let acnt_link=document.getElementById('account-link');
let order_link=document.getElementById('order-link');


deny_btn.addEventListener('click',()=>{
    to_be_cnfm_orders_div.style.display="none"
})

accept_btn.addEventListener('click',()=>{
    to_be_cnfm_orders_div.parentNode
})

acnt_link.addEventListener('click',()=>{
    window.location.href="http://localhost:5000/collector/cAcnt/cAcnt.html"
})

order_link.addEventListener('click',()=>{
    window.location.href="http://localhost:5000/collector/orders/orders.html"
})