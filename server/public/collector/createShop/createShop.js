
let paper_btn=document.getElementById('paper-btn');
let e_waste_btn=document.getElementById('e-waste-btn');
let plastic_btn=document.getElementById('plastic-btn');
let metal_btn=document.getElementById('metal-btn');
let other_btn=document.getElementById('other-btn');
glass_btn=document.getElementById('glass-btn')
let add_item_paper_btn=document.getElementById('add-item-paper');
let add_item_e_waste_btn=document.getElementById('add-item-e-waste');
let add_item_plastic_btn=document.getElementById('add-item-plastic');
let add_item_metal_btn=document.getElementById('add-item-metal');
let add_item_other_btn=document.getElementById('add-item-other');
let add_item_glass=document.getElementById('add-item-glass');

let add_item_paper_tag=document.getElementById('add-item-paper-tag');
let add_item_e_waste_tag=document.getElementById('add-item-e-waste-tag');
let add_item_plastic_tag=document.getElementById('add-item-plastic-tag');
let add_item_metal_tag=document.getElementById('add-item-metal-tag');
let add_item_other_tag=document.getElementById('add-item-other-tag');
let add_item_glass_tag=document.getElementById('add-item-glass-tag');


let paper_div=document.getElementById('paper-div');
let e_waste_div=document.getElementById('e-waste-div');
let plastic_div=document.getElementById('plastic-div');
let metal_div=document.getElementById('metal-div');
let other_div=document.getElementById('other-div');
let glass_div=document.getElementById('glass-div');

add_icon_paper=document.getElementById('add-icon-paper');
add_icon_e_waste=document.getElementById('add-icon-e-waste');
add_icon_plastic=document.getElementById('add-icon-plastic');
add_icon_glass=document.getElementById('add-icon-glass');
add_icon_metal=document.getElementById('add-icon-metal');
add_icon_other=document.getElementById('add-icon-other');


let add_icon=document.getElementsByClassName('material-symbols-outlined');
let save_btn=document.getElementById('save-btn');


paper_btn.addEventListener('click',()=>{
    paper_div.style.display=""
})
e_waste_btn.addEventListener('click',()=>{
    e_waste_div.style.display=""
})
plastic_btn.addEventListener('click',()=>{
    plastic_div.style.display=""
})
metal_btn.addEventListener('click',()=>{
    metal_div.style.display=""
})
other_btn.addEventListener('click',()=>{
    other_div.style.display=""
})
glass_btn.addEventListener('click',()=>{
    glass_div.style.display=""
})

add_item_paper_btn.addEventListener('click',()=>{
    //add_item_other_tag.style.display=""
    setTimeout(() => {
      paper_div.style.display="none"  
    }, 1000);
})

add_item_e_waste_btn.addEventListener('click',()=>{
    e_waste_div.style.display="none"
})

add_item_plastic_btn.addEventListener('click',()=>{
    plastic_div.style.display="none"
})

add_item_metal_btn.addEventListener('click',()=>{
    metal_div.style.display="none"
})

add_item_other_btn.addEventListener('click',()=>{
    other_div.style.display="none"
})

save_btn.addEventListener('click',()=>{
    //const checkLocalStorage=async ()=>{
        localStorage.setItem("created",true)
        window.location.href="http://scrapout.me/collector/cAcnt/cAcnt.html"
     // }
})

const addForPaper=()=>{
    for(let i=0;i<add_icon_paper.children.length;i++){
        console.log(add_icon_paper.children[i])
        add_icon_paper.children[i].addEventListener('click',async()=>{
            console.log(add_icon_paper.children[i])
            current=add_icon_paper.children[i]
            item=current.parentNode.parentNode.children[0].value
            price=current.parentNode.parentNode.children[1].value
            console.log(current.parentNode.parentNode.parentNode.parentNode, item,price)
            priceNode= `
                <p>${price}</p>
            `
            itemNode=`
                <p>${item}</p>
            `
            tagNode=`
                <div style="display:flex;flex-direction:row; justify-content:space-around">
                    ${itemNode}
                    ${priceNode}
                </div>
            `
            contents={
                category:'Paper',
                item:item,
                price:price
            }
            response=await addProducts(contents,token)
            if(response.success===true)
                current.parentNode.parentNode.parentNode.parentNode.innerHTML+=tagNode
            else alert('Something went wrong')
        })
    }
}

const addForEWaste=()=>{
    
    for(let i=0;i<add_icon_e_waste.children.length;i++){
        console.log(add_icon_e_waste.children[i])
        add_icon_e_waste.children[i].addEventListener('click',async()=>{
            console.log(add_icon_e_waste.children[i])
            current=add_icon_e_waste.children[i]
            item=current.parentNode.parentNode.children[0].value
            price=current.parentNode.parentNode.children[1].value
            console.log(current.parentNode.parentNode.parentNode.parentNode, item,price)
            priceNode= `
                <p>${price}</p>
            `
            itemNode=`
                <p>${item}</p>
            `
            tagNode=`
                <div style="display:flex;flex-direction:row; justify-content:space-around">
                    ${itemNode}
                    ${priceNode}
                </div>
            `
            contents={
                category:'E-Waste',
                item:item,
                price:price
            }
            response=await addProducts(contents,token)
            if(response.success===true)
                current.parentNode.parentNode.parentNode.parentNode.innerHTML+=tagNode
            else alert('Something went wrong')
        })
    }
}

const addForPlastic=()=>{
    for(let i=0;i<add_icon_plastic.children.length;i++){
        console.log(add_icon_plastic.children[i])
        add_icon_plastic.children[i].addEventListener('click',async()=>{
            console.log(add_icon_plastic.children[i])
            current=add_icon_plastic.children[i]
            item=current.parentNode.parentNode.children[0].value
            price=current.parentNode.parentNode.children[1].value
            console.log(current.parentNode.parentNode.parentNode.parentNode, item,price)
            priceNode= `
                <p>${price}</p>
            `
            itemNode=`
                <p>${item}</p>
            `
            tagNode=`
                <div style="display:flex;flex-direction:row; justify-content:space-around">
                    ${itemNode}
                    ${priceNode}
                </div>
            `
            contents={
                category:'Plastic',
                item:item,
                price:price
            }
            response=await addProducts(contents,token)
            if(response.success===true)
                current.parentNode.parentNode.parentNode.parentNode.innerHTML+=tagNode
            else alert('Something went wrong')
        })
    }
}

const addForGlass=()=>{
    for(let i=0;i<add_icon_glass.children.length;i++){
        console.log(add_icon_glass.children[i])
        add_icon_glass.children[i].addEventListener('click',async()=>{
            console.log(add_icon_glass.children[i])
            current=add_icon_glass.children[i]
            item=current.parentNode.parentNode.children[0].value
            price=current.parentNode.parentNode.children[1].value
            console.log(current.parentNode.parentNode.parentNode.parentNode, item,price)
            priceNode= `
                <p>${price}</p>
            `
            itemNode=`
                <p>${item}</p>
            `
            tagNode=`
                <div style="display:flex;flex-direction:row; justify-content:space-around">
                    ${itemNode}
                    ${priceNode}
                    
                </div>
            `
            contents={
                category:'Glass',
                item:item,
                price:price
            }
            response=await addProducts(contents,token)
            if(response.success===true)
                current.parentNode.parentNode.parentNode.parentNode.innerHTML+=tagNode
            else alert('Something went wrong')
        })
    }
}

const addForOthers=()=>{
    for(let i=0;i<add_icon_other.children.length;i++){
        console.log(add_icon_other.children[i])
        add_icon_other.children[i].addEventListener('click',async()=>{
            console.log(add_icon_other.children[i])
            current=add_icon_other.children[i]
            item=current.parentNode.parentNode.children[0].value
            price=current.parentNode.parentNode.children[1].value
            console.log(current.parentNode.parentNode.parentNode.parentNode, item,price)
            priceNode= `
                <p>${price}</p>
            `
            itemNode=`
                <p>${item}</p>
            `
            tagNode=`
                <div style="display:flex;flex-direction:row; justify-content:space-around">
                    ${itemNode}
                    ${priceNode}
                </div>
            `
            contents={
                category:'Others',
                item:item,
                price:price
            }
            response=await addProducts(contents,token)
            if(response.success===true)
                current.parentNode.parentNode.parentNode.parentNode.innerHTML+=tagNode
            else alert('Something went wrong')
        })
    }
}

const addForMetal=()=>{
    for(let i=0;i<add_icon_metal.children.length;i++){
        console.log(add_icon_metal.children[i])
        add_icon_metal.children[i].addEventListener('click',async()=>{
            console.log(add_icon_metal.children[i])
            current=add_icon_metal.children[i]
            item=current.parentNode.parentNode.children[0].value
            price=current.parentNode.parentNode.children[1].value
            console.log(current.parentNode.parentNode.parentNode.parentNode, item,price)
            priceNode= `
                <p>${price}</p>
            `
            itemNode=`
                <p>${item}</p>
            `
            tagNode=`
                <div style="display:flex;flex-direction:row; justify-content:space-around">
                    ${itemNode}
                    ${priceNode}
                </div>
            `

            contents={
                category:'Metal',
                item:item,
                price:price
            }
            response=await addProducts(contents,token)
            if(response.success===true)
                current.parentNode.parentNode.parentNode.parentNode.innerHTML+=tagNode
            else alert('Something went wrong')
        })
    }
}

const addEventListenerForAddIcons=()=>{
    addForPaper()
    addForEWaste()
    addForPlastic()
    addForGlass()
    addForMetal()
    addForOthers()
}

const checklocalstorage=()=>{
    token=localStorage.getItem('token')
    if(token){
        addEventListenerForAddIcons()
    }
    else{
        window.location.href="http://scrapout.me/collector/clogin/clogin.html"
    }
}

const addProducts=async(contents,token)=>{
    try{
        const response=await fetch('/collector/post/add_products',{
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