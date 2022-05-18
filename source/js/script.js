    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-header__toggle');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
    
    // const btnToggle = document.querySelector('.main-header__toggle');
    const mainHeader = document.querySelector('.main-header__top');

    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('main-header__toggle--active');
      mainHeader.classList.toggle('main-header__top--active');
    })
