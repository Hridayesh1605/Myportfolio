const projects = [
  {
    name: "html",
    imgSrc: "./assets/images/html1.png",
    link: "https://hridayesh1605.github.io/youtube_clone/",
    title: "HTML",
    description: "YouTube clone using HTML & CSS",
  },
  {
    name: "html",
    imgSrc: "./assets/images/html2.png",
    link: "https://splendid-shortbread-4f96ae.netlify.app/",
    title: "HTML",
    description: "Memory game using JavaScript",
  },
  {
    name: "html",
    imgSrc: "./assets/images/html3.png",
    link: "https://664ca145c1b6a7382e4a9c2a--wondrous-horse-137d19.netlify.app/",
    title: "HTML",
    description: "Animation of card while hover",
  },
  {
    name: "html",
    imgSrc: "./assets/images/html4.png",
    link: "https://664ca1a03291e729697de5d1--lucky-queijadas-b6c309.netlify.app/",
    title: "HTML",
    description: "Login form using HTML & CSS",
  },
  {
    name: "react",
    imgSrc: "./assets/images/react1.png",
    link: "https://inspiring-beijinho-4bce36.netlify.app/",
    title: "React",
    description: "Getting weather of a city from API",
  },
  {
    name: "react",
    imgSrc: "./assets/images/react2.png",
    link: "https://musical-genie-d09db1.netlify.app/",
    title: "React",
    description: "Clone of Google Keep",
  },
  {
    name: "react",
    imgSrc: "./assets/images/react3.png",
    link: "https://earnest-boba-656628.netlify.app/",
    title: "React",
    description: "List of top Netflix series",
  },
  {
    name: "react",
    imgSrc: "./assets/images/react4.png",
    link: "https://master--transcendent-biscuit-95cf9c.netlify.app/",
    title: "React",
    description: "To-do list",
  },
  {
    name: "react",
    imgSrc: "./assets/images/react5.png",
    link: "https://precious-piroshki-d40ef1.netlify.app/",
    title: "React",
    description: "Typing test",
  },
  {
    name: "sql",
    imgSrc: "./assets/images/sql1.jpg",
    link: "sql1.pdf",
    title: "SQL",
    description: "Ambulance booking system",
  },
  {
    name: "sql",
    imgSrc: "./assets/images/sql2.png",
    link: "sql2.pdf",
    title: "SQL",
    description: "ITvedant student database",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day5.webp",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-amazonec2-activity-7284874445658185729-_h7L?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Amazon EC2",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day6.jpeg",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-ec2-webhosting-activity-7285222536173236224-MLAQ?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: " Hosting Your Website on an EC2 Instance",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day7.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-ec2-activity-7285597445705621505-V1mD?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Hosting a Webpage on EC2 Without SSH Access!",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day8.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-windowsserver-activity-7285906189341593600-NWu3?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Creating a Windows Machine with RDP Acces",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day9.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-autoscaling-loadbalancer-activity-7286353388189999104-9V4l?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Auto Scaling with Load Balancer",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day10.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-autoscaling-activity-7287366743604293632-SMjn?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Scaling the Cloud with AWS Auto Scaling, Load Balancer, CloudWatch, SNS, and Stress Testing!",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day11.webp",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-iam-activity-7287785867740377088-npA8?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "AWS IAM",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day12.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-amazons3-cloudcomputing-activity-7288078819700142081-Xdue?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Amazon S3",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day13.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-amazons3-cloudcomputing-activity-7288417396363595776-NlPj?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: " Hosting a Static Website on Amazon S3",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day14.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-webdevelopment-cloudcomputing-activity-7289537567320936448-412E?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "AWS-Powered File Manager Project!",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day15.jpeg",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-s3-cloudcomputing-activity-7289947899533152258-qYNQ?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "AWS S3 Cross-Region Replication",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day16.webp",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-awsbudgets-activity-7290224303004905472-OKmC?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Creating a Budget in AWS",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day17.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudfront-ec2-activity-7290662212015198208-k-EC?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Speeding Up EC2 with CloudFront!",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day18.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-ec2-activity-7290953684341944320--QIi?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: " Accessing EC2 Instance Only from CloudFront",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day19.jpg",
    link: "https://www.linkedin.com/posts/hridayesh-more_cloudcomputing-aws-amazons3-activity-7292061774281924608-j5ka?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Accessing Private S3 Bucket via CloudFront (Without Static Website Hosting!)",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day20.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-ecommerce-activity-7292781734507565056-HB75?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Scalable E-Commerce Platform Using AWS CloudFront & EC2",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day21.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_100daysofcloud-aws-networking-activity-7293208168459825152-HjBs?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: " VPC",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day22.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_100daysofcloud-aws-cloudcomputing-activity-7293630086145073153-igrl?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "AWS Subnets, Internet Access & Route Tables!",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day23.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-networking-activity-7293876425311285248-6CBR?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Accessing a Private Subnet via a Public Subnet in AWS",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day24.jpg",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-networking-activity-7294754188016705536-Rze8?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Enabling Internet Access for Private Instances in AWS – 3 Methods!",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day25.png",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-awsnetworking-activity-7294949972582502402-UaTm?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "Network ACL",
  },
  {
    name: "aws",
    imgSrc: "./assets/images/day27.webp",
    link: "https://www.linkedin.com/posts/hridayesh-more_aws-cloudcomputing-vpc-activity-7295685393822191616-v2NU?utm_source=share&utm_medium=member_desktop",
    title: "AWS",
    description: "VPC Peering",
  },
  
];

console.log(projects);




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


const container = document.querySelector(".filterable_cards");

const generateCards = () => {
  container.innerHTML = ""; // Clear existing content

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("more-pro-card");
    card.setAttribute("data-name", project.name);

    card.innerHTML = `
      <div class="pro-img-card">
        <img src="${project.imgSrc}" alt="">
        <a href="${project.link}" class="btn" target="_blank">Read more</a>
      </div>
      <div class="more-pro-card_body">
        <h6 class="more-pro-card_title">${project.title}</h6>
        <p class="more-pro-card_text">${project.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
};

generateCards(); // Call function to display cards


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




function sendMail(){
  let params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }

  emailjs.send("service_m166kvn","template_48rt1kj",params).then(alert("Message sent successfully"))

}