document.addEventListener('DOMContentLoaded', function () {
     let sidenavs = document.querySelectorAll(".sidenav");
     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
     let collapsibles = document.querySelectorAll(".collapsible");
     let collapsiblesInstance = M.Collapsible.init(collapsibles);
  });

// function bookSearch() {}



  function openTab(evt, tabName) {
  let i,
      tabcontent, 
      tablinks;

  // Change to display first tab on page load
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

openBooksTabOnload()

function openBooksTabOnload()  {
    document.getElementById("books").style.display = "block";
    document.getElementsByClassName("tablinks")[0].classList.add("active");
}