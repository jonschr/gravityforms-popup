jQuery(document).ready(function( $ ) {

	//* Vars
	var openlink = $( '.open-popup' );
	var wrapper = $( '.popup-wrapper' );
	var popupcontent = $( '.popup-content' );
	var closelink = $( '.close-popup' );
	var scrollingEnabled = true;
	
	function gfPopupInit() {
		gfPopupInitialLoad();
		gfPopupOpen();
		gfPopupCloseInit();
	}

	function gfPopupInitialLoad() {
		wrapper.removeClass( 'open' );
		wrapper.addClass( 'closed' );

		wrapper.css( "display", "initial" );
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

			if (e.target !== this) {
			    return;
			}

			gfPopupClose();
		});
	}

	function gfPopupClose() {
		gfPopupEnableScroll();
		wrapper.addClass( 'closed' );
		wrapper.removeClass( 'open' );
	}

	function gfPopupDisableScroll() {
		scrollingEnabled = false;
		var current = $(window).scrollTop();
		$(window).scroll(function() {
			if ( scrollingEnabled !== true ) {
			    $(window).scrollTop(current);
			}
		});
	}

	function gfPopupEnableScroll() {
		scrollingEnabled = true;
	}
	
	//* DO ALL OF THE THINGS!
	// $( window ).resize(function() {
	// 	gfPopupInit();	
	// });

	gfPopupInit();
});