let logout_button=document.getElementById('logout-button')
let category=document.getElementsByClassName('category')
let container_wrapper=document.getElementById('container-wrapper')

let token=null

logout_button.addEventListener('click',()=>{
  localStorage.clear()
  window.location.href="http://scrapout.me/index.html"
})

for(let categ=0;categ<category.length;categ++){
  category[categ].addEventListener('click',()=>{
    let current_category=category[categ].id
    console.log(current_category)
    localStorage.removeItem('current_category')
    localStorage.setItem('current_category',current_category)
    const url=new URL('http://scrapout.me/user/shoplist/shoplist.html')
    url.searchParams.delete('category')
    url.searchParams.append('category',current_category)
    const newUrl=url.toString()
    window.location.href=newUrl
  })
}


const checkLocalStorage=()=>{
  token=localStorage.getItem('token')
  if(!token){
    window.location.href="http://scrapout.me/index.html"
  }
}

window.onload=checkLocalStorage()