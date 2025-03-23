$(document).ready(function() {

    $("main#spapp > section").height($(document).height() - 60);
  
    var app = $.spapp({pageNotFound : 'error_404'}); // initialize
  
    // define routes
    app.route({
      view: 'home',
      //onCreate: function() { $("#home").append($.now()+': Written on create<br/>'); },
      //onReady: function() { $("#home").append($.now()+': Written when ready<br/>'); }
    });
    app.route({view: 'about', load: 'about.html' });
    app.route({
      view: 'contact', 
      load: 'contact.html',
      onCreate: function() { $("#contact").append(""); }
    });
  
    // run app
    app.run();
  
  });