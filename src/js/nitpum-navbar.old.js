/*!
* Copyright nitpum (https://git.io/nitpum)
*/
function nitpumNavBurger() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav-content") {
        nav.className += " open";
    } else {
        nav.className = "nav-content";
    }
}

(function(){
    
    var navPos = document.getElementById("nav").offsetTop,
        b = document.getElementsByClassName("nav-burger");

    for (var i=0;i<b.length;i++)
        b[i].addEventListener('click', function () { nitpumNavBurger() });
    
    window.addEventListener('scroll', function(){ 
        scrollPos = window.scrollY;
        
        if (scrollPos > navPos) {
            console.log("Add");
            document.getElementsByClassName("navbar")[0].classList.add("fixed");
        } else document.getElementsByClassName("navbar")[0].classList.remove("fixed");        
    });
})();