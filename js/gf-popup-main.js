jQuery(document).ready(function( $ ) {

	//* Vars
	var openlink = $( '.open-popup' );
	var wrapper = $( '.popup-wrapper' );
	var popupcontent = $( '.popup-content' );
	var closelink = $( '.close-popup' );
	
	function gfPopupInit() {
		gfPopupInitialLoad();
		gfPopupOpen();
		gfPopupCloseInit();
	}

	function gfPopupInitialLoad() {
		wrapper.removeClass( 'open' );
		wrapper.addClass( 'closed' );
	}

	function gfPopupOpen() {
		openlink.click( function( event ) {
			event.preventDefault();
			wrapper.addClass( 'open' );
			wrapper.removeClass( 'closed' );
			gfPopupDisableScroll();
		});
	}

	function gfPopupCloseInit() {
		closelink.click( function() {
			gfPopupClose();
		});

		wrapper.not( popupcontent ).click( function( e ) {

			if (e.target !== this)
			    return;
			
			gfPopupClose();
		});
	}

	function gfPopupClose() {
		gfPopupEnableScroll();
		wrapper.addClass( 'closed' );
		wrapper.removeClass( 'open' );
	}

	function gfPopupDisableScroll() {
		var current = $(window).scrollTop();
		$(window).scroll(function() {
		    $(window).scrollTop(current);
		});
	}

	function gfPopupEnableScroll() {
		$(window).off('scroll');
	}
	
	//* DO ALL OF THE THINGS!
	// $( window ).resize(function() {
	// 	gfPopupInit();	
	// });

	gfPopupInit();
});