// Toggle Button
const toggelButton = document.getElementsByClassName("toggle-button")[0];
const navBtn = document.getElementsByClassName("nav-btn")[0];

toggelButton.addEventListener('click', () => {
  navBtn.classList.toggle('active')
})

// On Scroll Function
window.addEventListener("scroll", function () {
  let head = document.querySelector(".nav-box");
  var mybutton = document.getElementById("myBtn");
  if (window.scrollY >= 150) {
    head.style.position = "fixed"
    head.style.width = "100%"
    head.style.backgroundColor = "#3949ab"
    mybutton.style.display = "block";
  }
  else if(this.window.scrollY<=150) {
    head.style.backgroundColor = "transparent";
    mybutton.style.display = "none";
  }
})

// API Data
let fdata = fetch("https://reqres.in/api/users");
fdata
  .then((res) => res.json())
  .then((data) => {
    const html = data.data
      .map((user) => {
        return `
       <div class="row col col-s-12 col-sm-12 col-6 team">
                    <div class="col col-s-10  col-5"><img src=${user.avatar} alt=""></div>
                    <div class="col col-s-10 col-7">
                        <h4 class="team-h4">${user.first_name}</h4>
                        <h6>${user.email}</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.
                        </p>
                        <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i>
                            <span class="tweet">@nicolewest</span>
                        </a>
                    </div>
                </div>
       `;
      })
      .join("");
    document.querySelector(".apidata").insertAdjacentHTML('afterbegin', html)
  });
  
// backToTop
function backtop(){
   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}