(function ($) {

	$.fn.sataBackToTop = function (options) {
		var $element = this;
		options = $.extend({}, $.fn.sataBackToTop.defaults, options);
		options.$target = options.$target || $(window);

		var visible = false;
		var blocked = false;

		options.$target.scroll(function () {
			if ($(this).scrollTop() > 0) {
				if (!visible) {
					visible = true;
					$element.stop();
					$(this).show();
					$element.fadeTo(options.showSpeed, 1);
				}
			} else {
				visible = false;
				$element.stop();
				$element.fadeTo(options.hideSpeed, 0, function () {
					$(this).hide();
				});
			}
		});

		$element.click(function (e) {
			e.preventDefault();
			if (!blocked) {
				blocked = true;
				var $target = options.$target;
				if ($.isWindow($target.get(0))) {
					$target = $('body');
				}
				$target.animate({scrollTop: 0}, options.scrollSpeed, function(){
					blocked = false;
				});
			}
		});
	}

	$.fn.sataBackToTop.defaults = {
		showSpeed: 300,
		hideSpeed: 300,
		scrollSpeed: 300,
		$target: undefined
	};

})(jQuery);