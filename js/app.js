var app = {
 
    social: document.querySelector('.sharing-tool--mobile'),
    author: document.querySelector('.card__author'),
    
    init: function() {
      console.log('init');
      if (app.social) {
        app.addActionsEventListeners();
      }
    },
  
    addActionsEventListeners: function() {
      console.log('addActionsEventListeners');
      let openElt = document.querySelector('.sharing-tool__link');
      
        openElt.addEventListener('click', app.open);
      
  
      let closeElt = document.querySelector('.sharing-tool__link--arrow-white');
      
        closeElt.addEventListener('click', app.close);
      
    },
      
    open: function() {
      console.log('open');
      app.author.style.display = "none";
      app.social.style.display = "flex";

    },
  
    close: function() {
      console.log('close');
      app.author.style.display = "flex";
      app.social.style.display = "none";
    },
    
  };
  
  export default app;