'use strict';

(function($) {
    var pathname = window.location.pathname.split(',');
    var page = "home";
    if (pathname.length >= 2) {
        page = pathname[1];
    }
    var tabId = page + "-tab";
    $("li").each(function() {
        if (this.id == tabId) {
            $(this).addClass("active");
        }
    });
})(jQuery);