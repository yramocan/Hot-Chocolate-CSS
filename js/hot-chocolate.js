(function(window, document, $, undefined) {

    'use strict';

    var $trigger = $('.js-mobile');
    var nav      = '.js-nav';

    $trigger.on('click', function() {
        $(nav).slideToggle('fast');
    });

})(window, document, jQuery);
