logout_button=document.getElementById('logout')
home_button=document.getElementById('home')

logout_button.addEventListener('click',()=>{
  localStorage.clear()
  window.location.href="http://localhost:5000/index.html"
})

home_button.addEventListener('click',()=>{
    window.location.href="dashboard.html"
})

