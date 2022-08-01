

let create_shop_button=document.getElementById('create-shop-button');
let shop_info=document.getElementById('shop-info-id');
let first_shop_info=document.getElementById('new-shop-info');
let order_link=document.getElementById('order-link');
let view_shop_button=document.getElementById('view-shop-button');
let acnt_link=document.getElementById('account-link');


let token=null

accountDetailsWrapper=document.getElementsByClassName('acnt-details-wrapper')
categoryInfo=document.getElementsByClassName('category-info')

console.log(categoryInfo[0].innerHTML)


order_link.addEventListener('click',()=>{
    window.location.href="http://scrapout.me/collector/orders/orders.html"
})

acnt_link.addEventListener('click',()=>{
    window.location.href="http://scrapout.me/collector/cAcnt/cAcnt.html"
})


const renderData=async()=>{
    response=await collectorInfo(token)
    console.log(response)
    personalNode=`
    <div class="personal-info">
        <h2 id="profile-tag">Profile</h2>
        <ul class="shop-details">
        <li>${response.shopname}</li>
        <li>${response.email} </li>
        <li>${response.phone} </li>
        <li>${response.address}</li>
        </ul>
    </div>
    `
    accountDetailsWrapper[0].innerHTML+=personalNode

    product_response=await getProducts(token)
    console.log(product_response)

    const eachItem=(items)=>{
        node=''
        for(let i=0;i<items.length;i++){
            item=Object.keys(items[i])[0]
            price=items[i][item]
            node+=`<li>${item} : ${price} /kg</li>`
        }
        console.log(node)
        return node
    }

    itemNode=''
    for(let i in product_response){
        if(i==='shopname' || i==='__v' || i==='_id') continue

        itemNode+=`
            <h3>${i}</h3>
            <ul>
                ${eachItem(product_response[i])}
            </ul>
        `
    }
    categoryInfo[0].innerHTML+=itemNode
    
    
    
}

const checklocalstorage=()=>{
    token=localStorage.getItem('token')
    if(!token){
        window.location.href="http://localhost:5000/collector/clogin/clogin.html"
    }
    else{
        renderData()
    }
}

const collectorInfo=async(token)=>{
    try{
        const response=await fetch('/collector/get_account',{
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

const getProducts=async(token)=>{
    try{
        const response=await fetch('/collector/get_products',{
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

window.onload=checklocalstorage()