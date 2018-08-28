<?php
/*
    Plugin Name: Gravity Forms Popups
    Plugin URI: https://elod.in
    Description: A plugin to allow for Gravity Forms popups on the White Jacobs site
    Version: 0.1
    Author: Jon Schroeder
    Author URI: https://elod.in

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.
*/

/////////////////
// BASIC SETUP //
/////////////////

// Plugin Directory
define( 'GF_POPUPS', dirname( __FILE__ ) );

////////////////////////
// SCRIPTS AND STYLES //
////////////////////////

add_action( 'wp_enqueue_scripts', 'gf_popups_scripts_styles' );
function gf_popups_scripts_styles() {
	wp_register_script( 'gf-popup-main', plugin_dir_url( __FILE__ ) . 'js/min/gf-popup-main-min.js', array( 'jquery' ), null, true );
	wp_register_style( 'gf-popup-style', plugin_dir_url( __FILE__ ) . 'css/gravityforms-popup.css' );
}

///////////////////////////////////////////////////
// ADD AND OUTPUT THE WIDGET AREA (ON ALL PAGES) //
///////////////////////////////////////////////////

add_action( 'widgets_init', 'gf_popup_register_sidebar' );

function gf_popup_register_sidebar() {

	register_sidebar(
		array(
			'id' => 'gfpopups',
			'name' => __( 'Lightbox Popup' ),
			'description' => __( 'To display this sidebar, add a link with a class of open-popup' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>'
		)
	);
}

add_action( 'wp_footer', 'gf_popup_footer' );
function gf_popup_footer() {
	if ( is_admin() || !is_active_sidebar( 'gfpopups' ) )
		return;

	wp_enqueue_script( 'gf-popup-main' );
	wp_enqueue_style( 'gf-popup-style' );

	echo '<div class="popup-wrapper">';
		echo '<div class="popup-wrap">';
			echo '<div class="popup-content">';
				echo '<a class="close-popup" href="#"><span></span><span></span></a>';

				dynamic_sidebar( 'gfpopups' );

			echo '</div>';
		echo '</div>';
	echo '</div>';


}