var app = {
 
    socialMob: document.querySelector('.sharing-tool--mobile'),
    socialDes: document.querySelector('.sharing-tool--desktop'),
    author: document.querySelector('.card__author'),
    screenSize: window.screen.width,
    count: 0,
    
    init: function() {
        app.addActionsEventListeners();
      
    },
  
    addActionsEventListeners: function() {
      let openElt = document.querySelector('.sharing-tool__link');
      let closeElt = document.querySelector('.sharing-tool__link--arrow-white');

      if (app.screenSize > 800 ) {
        openElt.addEventListener('click', app.toggleDesktop);
      }
      else {
        openElt.addEventListener('click', app.open);
        closeElt.addEventListener('click', app.close);
      }
    },
    
    toggleDesktop: function () {
      window.onresize = function(){ location.reload(); }
      app.count += 1;

      if (app.screenSize > 800 && app.count%2 == 1 ) {
        app.socialDes.style.display = "flex";
      } 
      else {
        app.socialDes.style.display = "none";
      }
    },

    open: function() {
      window.onresize = function(){ location.reload(); }
      app.author.style.display = "none";
      app.socialMob.style.display = "flex";
     },
     
    close: function() {
      window.onresize = function(){ location.reload(); }
      app.author.style.display = "flex";
      app.socialMob.style.display = "none";
    },
    
  };
  
  export default app;