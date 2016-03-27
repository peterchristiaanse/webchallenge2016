<<<<<<< HEAD
(function ( $ ) {
  $.fn.tell = function(a) {
    if (typeof a == 'undefined') {
      a = " <- That's what he said!";
    }

    $(this).text($(this).text() + " " + a);

    return this;
  }
}( jQuery ));
=======
(function ( $ ) {
  $.fn.tell = function(a) {
    if (typeof a == 'undefined') {
      a = " <- That's what he said!";
    }

    $(this).text($(this).text() + " " + a);

    return this;
  }
}( jQuery ));
>>>>>>> 3174284a3d8764da7f341dcdebf16d41ce9b00d7
