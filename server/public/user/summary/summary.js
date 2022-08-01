confirmationTag=document.getElementById('confirmation-tag')


let token=null

const checklocalstorage=async ()=>{
  token=localStorage.getItem('token')
  if(!token){
    window.location.href="http://scrapout.me/user/login/login.html"
  }
  else{
    contents={
      shopname:localStorage.getItem('current_shop')
    }
    response=await getConfirmation(contents,token)
    if(response.success===true && response.confirm===true){
      confirmationTag.innerHTML='Order confirmed!!!'
    }
  }
}

const getConfirmation=async(contents,token)=>{
  try{
    const response=await fetch('/user/get_confirmation',{
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