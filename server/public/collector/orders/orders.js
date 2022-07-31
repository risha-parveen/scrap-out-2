let accept_button=document.getElementById('accept-button');
let deny_button=document.getElementById('deny-button');
let to_be_cnfm_orders_div=document.getElementById('to-be-cnfm-orders');
let cnfrmed_orders_div=document.getElementsByClassName('confirmed-div')
let account_link=document.getElementById('account-link');
let order_link=document.getElementById('order-link');


deny_btn.addEventListener('click',()=>{
    to_be_cnfm_orders_div.style.display="none"
})

accept_btn.addEventListener('click',()=>{
    to_be_cnfm_orders_div.parentNode
})


order_link.addEventListener('click',()=>{
    window.location.href="http://localhost:5000/collector/orders/orders.html"
})