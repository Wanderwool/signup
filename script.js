var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm-password').value) {
      //document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = '';
      document.getElementById('confirm-password').classList.add('valid')
      document.getElementById('confirm-password').classList.remove('invalid')
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = 'Password is not matching ⚠';
      document.getElementById('confirm-password').classList.remove('valid')
      document.getElementById('confirm-password').classList.add('invalid')
    }
  }

  var passwordCheck = function(){

  
  if(!(document.getElementById('password').validity.valid))
  {
    document.getElementById('message1').textContent = 'Password must contain at least one letter, one number and to be minimun 8 character long'
  }
  else{
    document.getElementById('message1').textContent = ''
  }

}
  


document.querySelectorAll(".form input").forEach(element => {
    element.addEventListener('blur', () => {
      
        if(element.validity.valid)
            element.classList.remove('error-input');
        else
            if(element.value) element.classList.add('error-input');
    });
});

document.querySelector(".form").addEventListener('submit', (e) => {
  
  if(!document.querySelector("#form").checkValidity()) {
      
      document.querySelectorAll("input").forEach(function(element) {
          if(element.checkValidity())
              element.classList.remove('error-input');
          else
              element.classList.add('error-input');
      });
      
      e.preventDefault();
  }
});