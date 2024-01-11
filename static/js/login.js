$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function showRegisterForm() {
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.register-form').style.display = 'block';
}

function showLoginForm() {
  document.querySelector('.register-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
}