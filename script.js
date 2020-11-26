function myFunction() {
var x = document.getElementById("data-design");
if(x.style.display==="none") {
    x.style.display="block";
} else {
    x.style.display="none";
}
var x = document.getElementById("iddesign");
x.style.color = "#5496C1";
x.style.borderBottom = "3px solid #5496C1";
x.style.paddingbottom = "3px";
}

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
      $(this).collapse('hide');
    }
  });
