const loadingElement = document.querySelector("[data-loading]");
window.addEventListener("load",()=>{
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
    console.log("run")
})


    const addEventOnElements = function (elements, eventType, callback) {
        for (let i = 0, len = elements.length; i < len; i++) {
          elements[i].addEventListener(eventType, callback);
        }
      }
    
    
    
    
    
    
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");
    
    addEventOnElements(navTogglers, "click", function () {
        console.log("clicked")
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    });
    
    addEventOnElements(navLinks, "click", function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("nav-active");
    });
    
    const header = document.querySelector("[data-header]");
    
    window.addEventListener("scroll", function () {
      header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
    });
    
const tiltelem = document.querySelectorAll("[data-tilt]")

const initTilt = function(event){
  console.log("jagdjg")
  const centerX = this.offsetWidth/2;
  const centerY = this.offsetHeight/2;
  const tiltPosY = ((event.offsetX - centerX)/centerX)*10;
  const tiltPosX = ((event.offsetY - centerY)/centerY)*10;

  this.style.transform= `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY*2)}deg)`;

}

addEventOnElements(tiltelem,"mousemove",initTilt);

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// const navigationLinksEl = document.querySelectorAll("[data-na-link]");
// const pageEl = document.querySelectorAll("[data-page]")
// for(let i=0;i<navigationLinksEl.length;i++){
//   navigationLinksEl[i].addEventListener("click",()=>{
    
//     for(let i = 0;i<pageEl.length;i++){

//       console.log(navigationLinksEl[i].innerHTML.toLowerCase()===pageEl[i].dataset.page.trim());

//       console.log(navigationLinksEl[i].innerHTML.toLowerCase().trim());

//       console.log(pageEl[i].dataset.page.trim())

//       // console.log(page[i].dataset.page)
//       if(navigationLinksEl[i].innerHTML.toLowerCase().trim()===pageEl[i].dataset.page){
//         console.log("clicked");
//         pageEl[i].classList.add("active");
//         navigationLinksEl[i].classList.add("active")
//       }
//       else{
//         pageEl[i].classList.remove("active");
//         navigationLinksEl[i].classList.remove("active");
//       }
//     }
//   })
// }







const navigationLinks = document.querySelectorAll("[data-na-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase().trim() === pages[i].dataset.page.trim()) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active2");
      } else {
        // console.log(this.innerHTML.toLowerCase().trim());
        // console.log(pages[i].dataset.page.trim());

        // console.log(this.innerHTML.toLowerCase().trim()===pages[i].dataset.page.trim())
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active2");
      }
    }

  });
}

window.addEventListener("scroll",()=>{
  // console.log(window.pageYOffset);
  // console.log(document.documentElement.scrollTop);
  const navEl = document.querySelector(".nav");

  if(document.documentElement.scrollTop >1550){
    // console.log("scrolled")
    navEl.classList.remove("hide");

  }
})


const filterButtonsEl = document.querySelectorAll(".filter_buttons button");
const filterableCardsEl = document.querySelectorAll(".filterable_cards .more-pro-card");

const filterCards = (e)=>{
  document.querySelector(".active1").classList.remove("active1");
  e.target.classList.add("active1");
  console.log(e.target);


  filterableCardsEl.forEach(card =>{
    card.classList.add("hide1");

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      card.classList.remove("hide1");
    }
  })
}



filterButtonsEl.forEach(button => button.addEventListener("click",filterCards));