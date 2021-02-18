document.addEventListener('DOMContentLoaded', function () {
     let sidenavs = document.querySelectorAll(".sidenav");
     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
     let collapsibles = document.querySelectorAll(".collapsible");
     let collapsiblesInstance = M.Collapsible.init(collapsibles);
     let modals = document.querySelectorAll('.modal');
     let modalInstances = M.Modal.init(modals); 
  });

setTimeout(()=> {
    flash_message = document.getElementsByClassName("flash");
    for (let i = 0; i < flash_message.length; i++) {
        flash_message[i].style.display="none";
    }
}, 2000);






 





