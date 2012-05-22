(function($){
    $.fn.daysleft = function(config){
        var defaults = {};
        var options = $.extend(defaults, config);
        return this.each(function(i){
            var _daysleft = Math.floor((config["date"].getTime()-new Date().getTime())/(60*60*24*1000))+1;
            if (_daysleft < 0)
	       _daysleft = 0;
            $(this).html(_daysleft);
        });
    };
})(jQuery);
