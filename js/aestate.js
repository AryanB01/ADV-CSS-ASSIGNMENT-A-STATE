// cta js 
document.addEventListener("DOMContentLoaded", function() {
  let clickable = document.getElementById("clickable");
  let properties = document.querySelector(".properties");

  //this call to action button worked fine in chrome but not in fire fox. so if you are using firefox please not it may not work.
  // console.log("test");
  let scroll = function() {
    
    window.scrollTo({
      top: properties.offsetTop,
      behavior: "smooth",
    });
    // console.log("test");
  };
  clickable.addEventListener("click", scroll);
});


// back to top button js 
document.addEventListener("DOMContentLoaded", () => {
    let backToTopBtn = document.getElementById("backtotop");
  
    //only shows when it is scrolled 100px for better UI
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    //scrolls to top when clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
