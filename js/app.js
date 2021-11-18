//javascript para la navegacion

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navegation");
const navigationitems = document.querySelectorAll(".navegation a");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationitems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
});

const testimonial = [
  {
    name: "Berty H",
    photoUrl:
      "https://images.unsplash.com/photo-1484328861630-cf73b7d34ea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80",
    text: "University did exactly what you said it does. If you want real marketing that works and effective implementation - University's got you covered.",
  },
  {
    name: "Maddy U",
    photoUrl:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    text: "Thanks University! We were treated like royalty. Buy this now. ",
  },
  {
    name: "Alysa A",
    photoUrl:
      "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    text: "I will refer everyone I know. I have gotten at least 50 times the value from University. I will let my mum know about this, she could really make use of University!",
  },
  {
    name: "Caroline J.",
    photoUrl:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=895&q=80",
    text: "Great job, I will definitely be ordering again!",
  },
];

const imgEl = document.querySelector(".imagenslider")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx =0;

function sliders(){
  const { name , photoUrl , text} =testimonial[idx]

  imgEl.src= photoUrl;
  textEl.innerHTML=text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonial.length) {
    idx = 0;
  }

  setTimeout(()=>{
    sliders()
  },5000)
}
sliders()

