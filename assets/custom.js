/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line
  //on [data-trigger-swym] click, trigger .swym-wishlist-button-bar if exist, use vanilla js
  var swymButton = document.querySelectorAll('[data-trigger-swym]');
  if (swymButton) {
    swymButton.forEach(function(button) {
      button.addEventListener('click', function() {
        var swymWishlist = document.querySelector('.swym-wishlist-button-bar button');
        if (swymWishlist) {
          swymWishlist.click();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    function initializePopup(btn, popup) {
      var errorElements = document.getElementsByClassName('error');
      var closeButtons = popup.getElementsByClassName('close');
    
      for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].style.display = 'none';
      }
    
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        popup.style.display = 'block';
      });
    
      for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
          popup.style.display = 'none';
        });
      }
    }
    
    var btn1 = document.getElementById('hold-btn');
    var popup1 = document.getElementById('popup1');
    if (popup1) {
      initializePopup(btn1, popup1);
    }
    
    var btn2 = document.getElementById('request-quote');
    var popup2 = document.getElementById('popup2');
    if (popup2) {
      initializePopup(btn2, popup2);
    }

  });
  
  /*function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }*/
  
  this.copyButtons = document.querySelectorAll('[data-copy-clipboard]');
  if (this.copyButtons.length) {
    this.copyButtons.forEach((el) => {
      el.addEventListener('click', function (e) {
        console.log('a');
        e.preventDefault();
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const copyText = this.getAttribute('href');
        this.style.position = 'static';
        let inputElem = document.createElement('input');
        inputElem.type = 'text';
        this.appendChild(inputElem);
        const newInput = this.querySelector('input');
        newInput.value = copyText;
        newInput.select();
        newInput.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand('copy');
        this.style.removeProperty('position');
        this.removeChild(newInput);
        
        this.querySelector('.copied').style.display = 'block';
        setTimeout(() => {
          this.querySelector('.copied').style.display = 'none';
        }, 2000);

      });
    });
  }

  //on hover .share--print, add .expanded class to its parent
  //on mouseout, remove .expanded class
  var sharePrint = document.querySelector('.share--print');
  var printOptions = document.querySelector('.print-options');
  if (sharePrint) {
    sharePrint.addEventListener('mouseenter', function() {
      this.parentNode.classList.add('expanded');
    });
    printOptions.addEventListener('mouseenter', function() {
      this.parentNode.classList.add('expanded');
    });
    sharePrint.addEventListener('mouseleave', function() {
      this.parentNode.classList.remove('expanded');
    });
  }

  var printWithPrice = document.querySelector('.print-with-price');
  if (printWithPrice) {
    printWithPrice.addEventListener('click', function() {
      document.body.classList.remove('no-price-print');
      window.print();
    });
  }

  var printWithoutPrice = document.querySelector('.print-without-price');
  if (printWithoutPrice) {
    printWithoutPrice.addEventListener('click', function() {
      document.body.classList.add('no-price-print');
      window.print();
    });
  }

  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('precheckout-btn')) {
      var form = event.target.closest('form');
      var cartPopup = form.querySelector('.cart-popup');
      cartPopup.classList.add('show');
    }
    
    if (event.target.classList.contains('popup-overlay')) {
      var parent = event.target.parentNode;
      parent.classList.remove('show');
    }
  });
    
  document.addEventListener('submit', function(event) {
    if (event.target.getAttribute('action') === '/cart') {
      var checkbox = event.target.querySelector("input[type='checkbox']");
      if (checkbox && !checkbox.checked) {
        if (!event.target.checkValidity()) {
          event.preventDefault();
          checkbox.focus();
        }
      }
    }
  });


})();
