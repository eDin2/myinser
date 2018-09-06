"use strict";
$(document).ready(function() {
  // unsere Funktion sollte beim klicken ausgeführt werden
  $(function() {
    $("a[href*=\\#]").stop().click(function() {
      // hiermit überprüfen wir ob im a-tag eine Raute drin ist
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        let EDO_HASH = this.hash;
        let EDO_ZIEL = $(this.hash);
        if (EDO_ZIEL.length) {
          let EDO_ABSTAND_TOP = EDO_ZIEL.offset().top;
          console.log(EDO_ABSTAND_TOP);

          $("html, body").animate({
            scrollTop: EDO_ABSTAND_TOP
          }, 1000, function() {
            window.location.hash = EDO_HASH;
          });
          return false;
        }
      }
    });
  });
});
