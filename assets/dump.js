
    
      if(submitPopup){
        submitPopup.addEventListener('click', function(e) {
          e.preventDefault();
          var ammPname = nameInput.value;
          var ammCemail = emailInput.value;
          var ammCphone = phoneInput.value;
          var hidProduct = hidProductInput.value;
          var validity = /^[0-9]{10,15}$/;
          var custMessage = formMessageInput.value;
      
          for (var i = 0; i < errorElements.length; i++) {
            errorElements[i].style.display = 'none';
          }
      
          if (ammPname === '') {
            nameError.style.display = 'block';
            nameInput.focus();
            return false;
          } else if (ammCemail === '') {
            emailError.style.display = 'block';
            emailInput.focus();
            return false;
          } else if (!IsEmail(ammCemail)) {
            emailInvalid.style.display = 'block';
            emailInput.focus();
            return false;
          } else if (ammCphone === '') {
            fromError.style.display = 'block';
            phoneInput.focus();
            return false;
          } else {
            submitPopup.value = 'Wait..';
      
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://shopifyexperthelp.com/shopify_data/amster/data.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                successElement.style.display = 'block';
                submitPopup.value = 'Submit';
              }
            };
            xhr.send('hid_product=' + encodeURIComponent(hidProduct) + '&amm_Pname=' + encodeURIComponent(ammPname) + '&amm_Cemail=' + encodeURIComponent(ammCemail) + '&amm_Cphone=' + encodeURIComponent(ammCphone) + '&cust_message=' + encodeURIComponent(custMessage));
          }
        });
      }