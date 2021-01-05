(function () {
    'use strict'

    bsCustomFileInput.init()
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.validated-form')
  
    // Loop over them and prevent submission
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  

  
 

  function showReview() {
    var x = document.getElementById("reviewSection");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



  // Random Campground
  
  if (window.location.pathname=='/') {
    window.onload = reload;
  if(performance.navigation.type == 2){
    location.reload(true);
  }
}

 function reload() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
    location.reload(true);
  }
  }
