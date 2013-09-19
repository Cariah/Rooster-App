$(document).bind("mobileinit", function () {
	$.mobile.transitionFallbacks.slide = 'none';
	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;

    // Remove page from DOM when it's being replaced
    $(document).on('pageshow', function (event, ui) {
    	$(ui.prevPage).remove();
    });

});