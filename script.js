function myFunction() {
  var x = document.getElementById("design");
  x.style.color = "#5496C1";
  x.style.borderBottom = "3px solid #5496C1";
  x.style.paddingbottom = "3px";
  }
  
  $(document).on('click', '.navbar-collapse.in', function (e) {
      if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
        $(this).collapse('hide');
      }
    });

