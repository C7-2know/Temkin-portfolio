var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

let form = document.getElementById("contact-form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const url = `mailto:chapimenge3@gmail.com?subject=${formData.get("subject")}&body=${formData.get("message")}`
  window.location.href = url;
  let username = document.getElementById("username");
  let email = document.getElementById("email")
  let subject = document.getElementById("subject")
  let message = document.getElementById("message")
  let responce = document.getElementById("responce")
  responce.className = "sent-message d-block"
    username.value = "";
    email.value =  "";
    subject.value = "";
    message.value = "";
});

const detailB_1 = document.getElementById("detailB_1")
const detail_1 = document.getElementById("detail_1")

function getDetail_1(){
  console.log(detail_1.style.display !== "none")
     if (detail_1.style.display !== "none"){
         detail_1.style.display = "none";
         detailB_1.innerHTML = "More detail"
     }else{
      detail_1.style.display = "block";
      detailB_1.innerHTML = "Less Detail"
     }
}
function getDetail_2(){
  console.log(detail_2.style.display !== "none")
     if (detail_2.style.display !== "none"){
         detail_2.style.display = "none";
         detailB_2.innerHTML = "More detail"
     }else{
      detail_2.style.display = "block";
      detailB_2.innerHTML = "Less Detail"
     }
}
function getDetail_3(){
  console.log(detail_3.style.display !== "none")
     if (detail_3.style.display !== "none"){
         detail_3.style.display = "none";
         detailB_3.innerHTML = "More detail"
     }else{
      detail_3.style.display = "block";
      detailB_3.innerHTML = "Less Detail"
     }
}
function getDetail_4(){
  console.log(detail_4.style.display !== "none")
     if (detail_4.style.display !== "none"){
         detail_4.style.display = "none";
         detailB_4.innerHTML = "More detail"
     }else{
      detail_4.style.display = "block";
      detailB_4.innerHTML = "Less Detail"
     }
}function getDetail_5(){
  console.log(detail_5.style.display !== "none")
     if (detail_5.style.display !== "none"){
         detail_5.style.display = "none";
         detailB_5.innerHTML = "More detail"
     }else{
      detail_5.style.display = "block";
      detailB_5.innerHTML = "Less Detail"
     }
}
function getDetail_6(){
  console.log(detail_6.style.display !== "none")
     if (detail_6.style.display !== "none"){
         detail_6.style.display = "none";
         detailB_6.innerHTML = "More detail"
     }else{
      detail_6.style.display = "block";
      detailB_6.innerHTML = "Less Detail"
     }
}
