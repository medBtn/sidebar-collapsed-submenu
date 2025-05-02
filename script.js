let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   console.log(arrowParent);
   
   arrowParent.classList.toggle("showMenu");
    });
  }

  let sidebar = document.querySelector(".sidebar");
  let header = document.querySelector(".header-section");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
    header.classList.toggle("close");
    
  });

  document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

  // load saved theme from local storage
  if(localStorage.getItem("theme")==="dark"){
    body.setAttribute("data-theme","dark");
    themeToggleBtn.classList.replace("bx-moon","bx-sun");
  }
  themeToggleBtn.addEventListener("click", function() {
    if(body.getAttribute("data-theme")==="dark"){
      body.setAttribute("data-theme","light");
      themeToggleBtn.classList.replace("bx-sun","bx-moon");

    }else{
      body.setAttribute("data-theme","dark");
      themeToggleBtn.classList.replace("bx-moon","bx-sun");
      }
    });
  })