console.log("Hello World");

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      // Modal
      var modal = document.getElementById("myModalForAC");
      var btnForAC = document.getElementById("btnforcat");
      var Btn = document.getElementById("closeBtnForAC");
      console.log(Btn)
      btnForAC.onclick = function () {
        modal.style.display = "block";
      }
      Btn.onclick = function () {
        modal.style.display = "none";
        // console.log("close button clicked")
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          // console.log("Outside windows clicked")
        }
      }