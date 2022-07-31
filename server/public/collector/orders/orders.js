let accept_button=document.getElementsByClassName('accept-button');
let deny_button=document.getElementsByClassName('deny-button');
let not_confimed_order_div=document.getElementsByClassName('not-confirmed-order-details-wrapper');
let confimed_order_div=document.getElementsByClassName('confirmed-order-details-wrapper')
let account_link=document.getElementById('account-link');
let order_link=document.getElementById('order-link');

for(let i=0;i<not_confimed_order_div.length;i++){
    deny_button[i].addEventListener('click',()=>{
        not_confimed_order_div[i].style.display="none"
    })
}

for(let i=0;i<not_confimed_order_div.length;i++){
    accept_button[i].addEventListener('click',()=>{
        console.log('item added');
        let newNode=`
                    <div class="not-confirmed-order-details-wrapper">
                      <div class="user-details-wrapper">
                        <ul class="user-details">
                          <li id="username">Username1</li>
                          <li>Address</li>
                          <li id="date">Date</li>                          
                        </ul>
                      </div>
                      <div class="product-details-wrapper">
                        <p id="products-heading">Products</p>
                        <ul class="product-details">
                          <li>product : price</li>
                          <li>product : price</li>                          
                        </ul>
                        <p id="total-price-heading">Total Price: </p>
                      </div>
                      <div class="accept-decline-buttons" style="display: none;">
                        <button class="accept-button">accept</button>
                        <button class="deny-button">decline</button>
                      </div>
                    </div>
      `
      console.log(confimed_order_div[i])
      confimed_order_div[i].parentNode.innerHTML+=newNode
    })
}

for(let i=0;i<confimed_order_div.length;i++){
    not_confimed_order_div[i].addEventListener('click',()=>{
        not_confimed_order_div[i].style.display="none"
    })
}

order_link.addEventListener('click',()=>{
    window.location.href="http://localhost:5000/collector/orders/orders.html"
})