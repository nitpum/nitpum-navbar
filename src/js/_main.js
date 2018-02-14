/*!
* Copyright nitpum (https://git.io/nitpum)
*/

// Functions
function nitpumNavBurger(i, j, k) {
  console.log(i + ' ' +  j + ' ' + k);
  // var nav = burger;
  // if (nav.className === 'nav-content') {
  //     nav.className += ' open';
  // } else {
  //     nav.className = 'nav-content';
  // }
}

// On document load
(function () {
  
  var navPos = document.getElementById('nav').offsetTop;
  var navbar = document.getElementsByClassName('navbar');
  var prevPos; // Previous scroll y position

  // Add click event to navbar burger
  for (var i = 0; i < navbar.length; i++) {    
    if (navbar[i] != null) {

        for (var j = 0; j < navbar[i].childNodes.length; j++) {
          if (navbar[i].childNodes[j].className == 'nav-content') { // Get content

            // Get burger
            for (var k = 0; k < navbar[i].childNodes[j].childNodes.length; k++) {
              if (navbar[i].childNodes[j].childNodes[k].className == 'nav-burger') {
                (function (i, j, k) {

                  navbar[i].childNodes[j].childNodes[k].addEventListener('click', function (){
                    if (navbar[i].childNodes[j].className === 'nav-content') {
                      navbar[i].childNodes[j].className += ' open';
                    } else {
                      navbar[i].childNodes[j].className = 'nav-content';
                    }
                  });

                })(i, j, k);
              }

            }
            
          }
        }

        // Get nav-content
        /*
        for (var j = 0; j < b[i].childNodes.length; j++) {
          console.log(j);
          if (b[i].childNodes[j].className == 'nav-content') {
            var navContent = b[i].childNodes[j];
            // Get burger
            /*
            for (var k = 0; k < navContent.childNodes.length; k++) {
              var child2 = navContent.childNodes[k];
              if (child2.className == 'nav-burger') {
                var burger = child2;
                burger.addEventListener('click', function () {
                  console.log('click ' + k)
                });
                
              }
            }
            */
          // }
        // }
      

      //b[i].addEventListener('click', function () { nitpumNavBurger(b[i]) });
    }
  }
  
      
  // Scrolling event
  window.addEventListener('scroll', function(){ 
      scrollPos = window.scrollY;
      
      // Fixed when scrolling pass
      for (var i = 0; i < document.getElementsByClassName('navbar-fixed-when-scroll-pass').length; i++) {
        var fixedScrollingNav = document.getElementsByClassName('navbar-fixed-when-scroll-pass')[i];
        if (fixedScrollingNav != null) {
          if (scrollPos > navPos) {
            fixedScrollingNav.classList.add('fixed');
          } else fixedScrollingNav.classList.remove('fixed');        
        }
      }

      // Hide when scrolling down
      for (var i = 0; i < document.getElementsByClassName('navbar-hide-scrolling').length; i++) {
        var hideScrollingNav = document.getElementsByClassName('navbar-hide-scrolling')[i];
        if (hideScrollingNav != null) {
          if (scrollPos > prevPos) {
            hideScrollingNav.classList.add('hidden');
          } else {
            hideScrollingNav.classList.remove('hidden');
          }
        }
      }

      prevPos = window.scrollY;
  });
  
})();