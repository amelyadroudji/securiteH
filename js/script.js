$('.nos-services-carousel').owlCarousel({
      items:2,
      loop: true,
      autoplay: true,
      stagePadding: 7,
      margin: 20,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 2000,
      autoplayTimeout:3000,
      center:true,
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      dots: false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
  });

/***secteurs carousel **/
  $('.nos-secteurs-carousel').owlCarousel({
        items:3,
        loop:false,
        center:true,
        margin:20,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2000,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
/*** fin secteur carousel **/

/***navbar fixed **/
$(window).scroll(function(){
  if($(window).scrollTop() > 10) {
      $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});

/** fin navar fixed ****/

/**SCROLLING TO THE TOP***/
var offset = 250;
$(window).scroll(function(){
  if($(this).scrollTop() > offset){
   $(".scroll-top").addClass("scroll-top-active");
  }else {
      $(".scroll-top").removeClass("scroll-top-active");
  }
});

$(".scroll-top").click(function(){
  $('html ,body').animate({scrollTop : 0, easing: 'linear'} ,200);
});

/**** fin SCROLLING TO THE TOP**/

/**** change active class navbar*/
jQuery(function($) {
     var path = window.location.href;
     $('.navbar .nav-item .nav-link').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
    });

/****fin change active class navbar*/

/**** change active class navbar footer*/
    jQuery(function($) {
         var path = window.location.href;
         $('.footer-nav a').each(function() {
          if (this.href === path) {
           $(this).addClass('active-footer');

          }
         });
        });

/**** fin change active class navbar footer*/

/****TEST CONTACT FORM***/
  const envoyer = $(".envoyer");
  const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    envoyer.click(function () {
     if($(".input-nom").val() == ""  || $(".input-prénom").val() == "" || $(".input-email").val() == ""  || $(".input-telephone").val() == "" || $(".input-message").val() == ""){
        $(".vide").addClass("show-vide");
        $(".input-nom").addClass("contact-error");
        $(".input-prénom").addClass("contact-error");
        $(".input-email").addClass("contact-error");
        $(".input-telephone").addClass("contact-error");
        $(".input-message").addClass("contact-error");
    } else if(!emailReg.test( $(".input-email").val())) {
          $(".vide").addClass("show-vide");
     } else {
       $(".message-envoyé").css("display", "block");

     }
    });

/**** fin TEST CONTACT FORM***/

/****TEST devis FORM***/
  const envoyerDevis = $(".envoyer-devis");
  const emailReg1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    envoyerDevis.click(function () {

     if(!($("#test1").prop("checked")) || $(".input-nom-devis").val() == ""  || $(".input-prénom-devis").val() == "" || $(".input-email-devis").val() == ""  || $(".input-telephone-devis").val() == "" || $(".input-message-devis").val() == "" || $(".input-adresse-postale").val() == "" || $(".input-ville").val() == "" || $(".input-code-postale").val() == ""){
        $(".vide").addClass("show-vide");
        $(".input-nom-devis").addClass("contact-error");
        $(".input-prénom-devis").addClass("contact-error");
        $(".input-email-devis").addClass("contact-error");
        $(".input-telephone-devis").addClass("contact-error");
        $(".input-message-devis").addClass("contact-error");
        $(".input-adresse-postale").addClass("contact-error");
        $(".input-ville").addClass("contact-error");
        $(".input-code-postale").addClass("contact-error");
    } else if(!emailReg.test( $(".input-email-devis").val())) {
           $(".vide").addClass("show-vide");
     } else {
       $(".message-envoyé").css("display", "block");

     }
    });

/**** fin TEST devis FORM***/

/****TEST emploi FORM***/
  const envoyerCondidature = $(".envoyer-condidature");

    envoyerCondidature.click(function () {

     if(!($("#test1").prop("checked")) || $(".input-nom-condidature").val() == ""  || $(".input-prénom-condidature").val() == "" || $(".input-email-condidature").val() == ""  || $(".input-telephone-condidature").val() == "" || $(".input-adresse-postale-condidature").val() == "" || $(".input-ville-condidature").val() == "" || $(".input-code-postale-condidature").val() == "" || $(".input-message-condidature").val() == ""){
        $(".vide").addClass("show-vide");
        $(".input-nom-condidature").addClass('contact-error');
        $(".input-prénom-condidature").addClass('contact-error');
        $(".input-email-condidature").addClass('contact-error');
        $(".input-telephone-condidature").addClass('contact-error');
        $(".input-adresse-postale-condidature").addClass('contact-error');
        $(".input-ville-condidature").addClass('contact-error');
        $(".input-code-postale-condidature").addClass('contact-error');
        $(".input-message-condidature").addClass('contact-error');

    } else if(!emailReg.test( $(".input-email-condidature").val())) {
           $(".vide").addClass("show-vide");
     } else{
       $(".message-envoyé").css("display", "block");

     }
    });

/**** fin TEST emploi FORM***/

///hide message envoyé***//
    const buttonCancel= $(".message-envoyé button");
    buttonCancel.click(function() {
       $(".message-envoyé").css("display", "none");
       $(".input-nom").val('');
       $(".input-prénom").val('');
       $(".input-email").val('');
       $(".input-telephone").val('');
       $(".input-message").val('');
       $(".input-nom-devis").val('');
       $(".input-prénom-devis").val('');
       $(".input-email-devis").val('');
       $(".input-telephone-devis").val('');
       $(".input-message-devis").val('');
       $(".input-adresse-postale").val('');
       $(".input-ville").val('');
       $(".input-code-postale").val('');
       $(".input-adresse-ligne2").val('');
       $("#test1").prop("checked", false);

       /******/
       $(".input-nom-condidature").val('');
       $(".input-prénom-condidature").val('');
       $(".input-email-condidature").val('');
       $(".input-telephone-condidature").val('');
       $(".input-message-condidature").val('');
       $(".input-adresse-postale-condidature").val('');
       $(".input-ville-condidature").val('');
       $(".input-code-postale-condidature").val('');
       $(".input-adresse-ligne2-condidature").val('');
       $("#test1").prop("checked", false);

       ///devis ///
       $(".input-nom-devis").removeClass("contact-error");
       $(".input-prénom-devis").removeClass("contact-error");
       $(".input-email-devis").removeClass("contact-error");
       $(".input-telephone-devis").removeClass("contact-error");
       $(".input-message-devis").removeClass("contact-error");
       $(".input-adresse-postale").removeClass("contact-error");
       $(".input-ville").removeClass("contact-error");
       $(".input-code-postale").removeClass("contact-error");

       //// conatct ///
       $(".input-nom").removeClass("contact-error");
       $(".input-prénom").removeClass("contact-error");
       $(".input-email").removeClass("contact-error");
       $(".input-telephone").removeClass("contact-error");
       $(".input-message").removeClass("contact-error");

       ////Emploi

       $(".input-nom-condidature").removeClass('contact-error');
       $(".input-prénom-condidature").removeClass('contact-error');
       $(".input-email-condidature").removeClass('contact-error');
       $(".input-telephone-condidature").removeClass('contact-error');
       $(".input-adresse-postale-condidature").removeClass('contact-error');
       $(".input-ville-condidature").removeClass('contact-error');
       $(".input-code-postale-condidature").removeClass('contact-error');
       $(".input-message-condidature").removeClass('contact-error');

       if($(".vide").hasClass("show-vide")){
         $(".vide").removeClass("show-vide");
       }
    });

///hide message envoyé***//

/***hide formulaire-vide*/
    $(".vide .fa").click(function() {
        $(".vide").removeClass("show-vide");

    });

/***fin hide formulaire-vide*/

/**drag and drop CV ***/

function dropHandler() {


  var dropZone = $(".drop_zone");

  dropZone.on('drop', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
      var formData = new FormData();
      var files_lists = e.originalEvent.dataTransfer.files;
      console.log(files_lists);
      for(var i=0; i<files_lists.length; i++){
        formData.append('file[]', files_lists[i]);
      }
      console.log(formData);
  });

  dropZone.on('dragover', function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
    });

    dropZone.on('dragleave', function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('dragover');
      });



}

dropHandler();

/*** fin drag and drop cv **/


/***drag and drop files using button**/

function handleFileSelect (e) {
  var files = e.target.files;

  console.log(files);
}


$(function () {
    $('.selectinner-fichiers').click(function(e) {
        $('#file-input').click();
    });
    $('#file-input').change(handleFileSelect);
});
/*** fin drag and drop files using button**/
