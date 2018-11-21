$(document).ready(function(){
    
      $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
          
            window.location.hash = hash;
          });
        }
       });
    });
    
    function contactbtn(){
        document.getElementById("about").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("media").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("secrets").style.animation= "fadeToNone 1s linear forwards";
        
        setTimeout(function(){
            document.getElementById("about").style.display= "none";
            document.getElementById("media").style.display= "none";
            document.getElementById("secrets").style.display= "none";
            document.getElementById("contact").style.display= "block";
            document.getElementById("contact").style.animation= "fadeFromNone 2s linear forwards";
        }, 1000);
    }
    
    function aboutbtn(){
        document.getElementById("contact").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("media").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("secrets").style.animation= "fadeToNone 1s linear forwards";
        
        setTimeout(function(){
            document.getElementById("contact").style.display= "none";
            document.getElementById("media").style.display= "none";
            document.getElementById("secrets").style.display= "none";
            document.getElementById("about").style.display= "block";
            document.getElementById("about").style.animation= "fadeFromNone 2s linear forwards";
        }, 1000);
        
    }
    
    function mediabtn(){
        document.getElementById("contact").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("about").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("secrets").style.animation= "fadeToNone 1s linear forwards";
        
        setTimeout(function(){
            document.getElementById("contact").style.display= "none";
            document.getElementById("about").style.display= "none";
            document.getElementById("secrets").style.display= "none";
            document.getElementById("media").style.display= "block";
            document.getElementById("media").style.animation= "fadeFromNone 2s linear forwards";
        }, 1000);
    }
    
    function secretsbtn(){
        document.getElementById("contact").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("about").style.animation= "fadeToNone 1s linear forwards";
        document.getElementById("media").style.animation= "fadeToNone 1s linear forwards";
        
        setTimeout(function(){
            document.getElementById("contact").style.display= "none";
            document.getElementById("about").style.display= "none";
            document.getElementById("media").style.display= "none";
            document.getElementById("secrets").style.display= "block";
            document.getElementById("secrets").style.animation= "fadeFromNone 2s linear forwards";
        }, 1000);
    }

    function readAnswer(){
        var x = document.forms["myForm"]["password"].value;
        if (x == "isn't she lovely" || x == "isn't she sikha shrestha"){
            document.getElementById("hidden").style.display ="block";
            document.getElementById("hidden").style.animation="fadeFromNone 2s linear forwards";
            window.location.href='#hidden';
            return false;
        }
        else{
            document.getElementById("validation").style.display ="block";
            return false;
        }
    }
    