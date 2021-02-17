document.addEventListener('DOMContentLoaded', function () {
     let sidenavs = document.querySelectorAll(".sidenav");
     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
     let collapsibles = document.querySelectorAll(".collapsible");
     let collapsiblesInstance = M.Collapsible.init(collapsibles);
     let modals = document.querySelectorAll('.modal');
     let modalInstances = M.Modal.init(modals); 
  });
/*
     let searchInput = document.querySelector("input[name='search']");
     let search = searchInput ? searchInput.value : "";
     let clearBtn = document.getElementById("clear-results");
     function manageButton() {
         if (searchInput.value != "") {
             clearBtn.style.display = "block";
         } else {
             clearBtn.style.display = "none";
         }
     };
     manageButton();
  /*
let flashMessage = document.getElementById("flashMessage{{loop.index");
setTimeout(function() {
    flashMessage.fadeOut("fast");
}, 2000);
*/
/*
document.getElementById("search-submit").addEventListener("submit", manageBtn);

document.getElementById("search").addEventListener("input", manageBtn)

document.getElementById("submitBtn").addEventListener("click", manageBtn)
function manageBtn() {
let clearBtn = document.getElementById("clear-results");
clearBtn.style.display = "block";
};
*/

document.getElementById("submitBtn").addEventListener("click", manageBtn)
let clearBtn = document.getElementById("clear-results");
function showBtn() {
    clearBtn = setTimeout((function(){ 
        manageBtn(); 
    }, 10000))
};  

function manageBtn() {
    clearBtn.style.display = "block";
}
  


//Get the button:
let scrollBtn = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.getElementById("scrollToTop").addEventListener("click", topFunction);


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






