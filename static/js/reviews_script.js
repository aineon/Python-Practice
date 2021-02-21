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


document.getElementById("search-submit").addEventListener("submit", manageBtn);
document.getElementById("search").addEventListener("input", manageBtn)

document.getElementById("submitBtn").addEventListener("click", manageBtn)
function manageBtn() {
let clearBtn = document.getElementById("clear-results");
clearBtn.style.display = "block";
};

/*
  function manageBtn() {
    clearBtn.style.display = "block";
}
*/

let id, 
    i, 
    inputs = document.getElementsByClassName('review-search');
    for (i = 0; i < inputs.length; i++){  
        if (inputs[i].type == 'text' && (inputs[i].value == '' || inputs[i].value == 'n/a'))  {    
            document.getElementById('clear-results' + inputs[i].id).style.display = 'none';  
        };
    };