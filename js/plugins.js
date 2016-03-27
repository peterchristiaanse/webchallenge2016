(function ( $ ) {
  $.fn.tell = function(a) {
    if (typeof a == 'undefined') {
      a = " <- That's what he said!";
    }

    $(this).text($(this).text() + " " + a);

    return this;
  }
}( jQuery ));
