$(function() {
    $('a').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
      }
    });
  });


window.addEventListener('scroll', function(){
    if(window.scrollY>=40){
        document.querySelector('#navbar').style.opacity = 0.97;
    }
    else if(window.scrollY>=80){
        document.querySelector('#navbar').style.opacity = 0.94;
    }
    else if(window.scrollY>=120){
        document.querySelector('#navbar').style.opacity = 0.91;
    }
    else if(window.scrollY>=160){
        document.querySelector('#navbar').style.opacity = 0.88;
    }
    else if(window.scrollY>=200){
        document.querySelector('#navbar').style.opacity = 0.85;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});