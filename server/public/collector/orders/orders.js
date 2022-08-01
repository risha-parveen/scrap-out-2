

let accept_button=document.getElementsByClassName('accept-button');
let deny_button=document.getElementsByClassName('deny-button');
let not_confimed_order_div=document.getElementsByClassName('not-confirmed-order-details-wrapper');
let confimed_order_div=document.getElementsByClassName('confirmed-order-details-wrapper')
let account_link=document.getElementById('account-link');
let order_link=document.getElementById('order-link');

confirmedOrderDiv=document.getElementsByClassName('orders')[1]
notConfirmedOrderDiv=document.getElementsByClassName('orders')[0]


order_link.addEventListener('click',()=>{
    window.location.href="http://scrapout.me/collector/orders/orders.html"
})


const printnode=(orders, index)=>{
  totalPrice=0

  last=orders[index].pop()
  confirmed=last.confirm 
  date=last.date 

  productNode=''

  for(let i=0;i<orders[index].length;i++){
    item=orders[index][i].key
    price=orders[index][i][item]
    totalPrice+=parseInt(price)
    productNode+=`<li>${item} : Rs ${price} /kg</li>`
  }

  node=`
  <div class="not-confirmed-order-details-wrapper">
    <div class="user-details-wrapper">
      <ul class="user-details">
        <li id="username">${index}</li>
        <li id="date">${date}</li>                          
      </ul>
    </div>
    <div class="product-details-wrapper">
      <p id="products-heading">Products</p>
      <ul class="product-details">
        ${productNode}                          
      </ul>
      <p id="total-price-heading">Total Price: ${totalPrice}</p>
    </div>
    <div class="accept-decline-buttons">
      <button class="accept-button" id="accept">accept</button>
      <button class="deny-button" id="deny">decline</button>
    </div>
  </div>
  `

  orders[index].push(last)
  if(confirmed===false){
    notConfirmedOrderDiv.innerHTML+=node
  }
  else if(confirmed===true){
    confirmedOrderDiv.innerHTML+=node  
  }
}

const renderData=async()=>{

  response=await getOrders(token)
  console.log(response.orders[0])

  for(let i in response.orders[0]){
    printnode(response.orders[0],i)
  }

  acceptButton=document.getElementsByClassName('accept-button')
  declineButton=document.getElementsByClassName('deny-button')
  console.log(declineButton.length)

  for(let i=0;i<acceptButton.length;i++){
    acceptButton[i].addEventListener('click',async()=>{
      username=acceptButton[i].parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML
      contents={
        confirmation:true,
        username:username
      }
      response=await changeConfirm(contents,token)
      if(response.success===true){
        
        toBeChangedNode=acceptButton[i].parentNode.parentNode
        
        confirmedOrderDiv.appendChild(toBeChangedNode)
        i=0  
      }  
      else{
        alert('something went wrong')
      }   
    })
  }

  for(let i=0;i<declineButton.length;i++){
    declineButton[i].addEventListener('click',()=>{
      console.log(declineButton[i].parentNode.parentNode)
      declineButton[i].parentNode.parentNode.style.display="none"
    })
  }
}

const checklocalstorage=()=>{
  token=localStorage.getItem('token')
  if(!token){
    window.location.href="http://scrapout.me/collector/clogin/clogin.html"
  }
  else renderData()
}

const getOrders=async(token)=>{
  try{
      const response=await fetch('/collector/get_orders',{
        method:'GET',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
              'Authorization':'Bearer '+token
          }
      })
      const result=await response.json()
      console.log(result)
      return result
    }
    catch(e){
      console.log(e)
    }
}

const changeConfirm=async(contents,token)=>{
  try{
    const response=await fetch('/collector/post/change_confirm',{
      method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body:JSON.stringify(contents)
    })
    const result=await response.json()
    console.log(result)
    return result
  }
  catch(e){
    console.log(e)
  }
}

window.onload=checklocalstorage()