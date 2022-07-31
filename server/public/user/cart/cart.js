
cartContainer=document.getElementById('cart-container')
cartWrapper=document.getElementsByClassName('cart-wrapper')
chooseDate=document.getElementById('chooseDate')
buttonCart=document.getElementsByClassName('button-cart')

let token=null
let selectedDate=null

console.log(cartWrapper[0])
cartContainer=cartWrapper[0].firstElementChild



const renderData=async()=>{
  let Totalprice=0
  alreadyOrdered=await getOrderDetails(token)
  console.log(alreadyOrdered.items)

  for(let i=0;i<alreadyOrdered.items.length;i++){
    let currentKey=alreadyOrdered.items[i].key 
    let currentPrice=alreadyOrdered.items[i][currentKey]
    Totalprice+=parseInt(currentPrice)
    let productNode=''
    productNode=`
      <div class="product-details">
        <div class="container-img">
            <img class="product-img" src="../../images/paper.png">
        </div>
        <div class="product-text">
            <p id="item-title">${currentKey}</p>
            <p>Price:₹ ${currentPrice} /kg</p>
        </div>
      </div>
    `  
    cartContainer.innerHTML+=productNode
    
  }

  summaryNode=`
    <div class="product-details" id="product-cart">
      <div class="cart-details">
        <p>Grand Total: ${Totalprice} Rs</p>
      </div>
    </div>
  `
  cartContainer.innerHTML+=summaryNode

  let confirmNode=`
    <div class="placeOrder-container">
      <div class="cart-details">
          <label for="chooseDate">Choose your preffered date</label><br>
          <input type="date" id="chooseDate" name="date">
      </div>
      <div class="button-container" id="confirmOrder-container">
          <button class="button-cart" id="confirm-button">Confirm Order</button>
      </div>
    </div>
  `
  cartContainer.innerHTML+=confirmNode

  confirmButton=buttonCart[0]
  
  confirmButton.addEventListener('click',async()=>{
    selectedDate=confirmButton.parentNode.parentNode.firstElementChild.lastElementChild.value
    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    today=yyyy+'-'+mm+'-'+dd
    if(selectedDate===''){
      alert('please select date')
    }
    else if(selectedDate!=='' && selectedDate<today){
      alert('not possible to select days before today')
    }
    contents={
      date:selectedDate,
    }
    if(selectedDate!=='' && selectedDate>=today){
      try{
        response=await confirmOrder(contents,token)
          if(response.success===true){
            window.location.href="http://localhost:5000/user/summary/summary.html"
            alert('Your order has been confirmed. We will notify you when your slot is booked')
            
          }
          else{
            alert('Something went wrong. Try again ')
          }
        }
      catch(err){
        console.log(err)
      }
    }
  })
}

const checkLocalStorage=()=>{
  token=localStorage.getItem('token')
  if(token){
    renderData()
  }else{
    window.location.href="http://localhost:5000/index.html"
  }
}

const getOrderDetails=async (token)=>{
  try{
    const response=await fetch('/user/get_order',{
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

const confirmOrder=async(contents,token)=>{
  try{
    const response=await fetch('/user/post/confirm_order',{
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
  }catch(err){
    console.log(err)
  }
}

window.onload=checkLocalStorage()