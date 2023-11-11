
const form = document.getElementById('submit-form');
const errorElement = document.getElementById('mailError');

form.addEventListener('submit',(e) =>{
  e.preventDefault()
  
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbwRbW65LET4fYHJLUDy3jS_REhhcejo28EB0eYhYuPWx08HgNjUtmbI0Pb7CbEDxK5H/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          window.alert("Form submitted successfully");
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
        })
      })

    