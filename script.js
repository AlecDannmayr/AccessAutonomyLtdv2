function myFunction() {
var x =document.getElementById("data-design");
if(x.style.display==="none") {
    x.style.display="block";
} else {
    x.style.display="none";
}
}

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
      $(this).collapse('hide');
    }
  });