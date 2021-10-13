//javascript para la navegacion

window.addEventListener("scroll",function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky",this.window.scrollY > 0)

})


const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navegation")
const navigationitems = document.querySelectorAll(".navegation a")
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})

navigationitems.forEach((navigationItem)=>{
    navigationItem.addEventListener("click",()=>{
        menuBtn.classList.toggle("active")
        navigation.classList.toggle("active")
    })
})