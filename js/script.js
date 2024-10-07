$(function(){

  //ドロワー開閉
  $('.c-drawer__icon').click(function(e) {
    e.preventDefault();
    $('.c-drawer__icon, .l-drawer').toggleClass('is-open');
    return false;
  });

  
  $('.p-drawer__nav li a[href^="#"]').click(function(e) {
    e.preventDefault();
    ('.c-drawer__icon, .l-drawer').removeClass('is-open');
    
    return false;  
  });
  
});