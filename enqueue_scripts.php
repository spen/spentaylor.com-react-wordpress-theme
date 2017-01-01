<?php

class Enqueue_Scripts {
	
	function __construct() {
		add_action ('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
		add_action ('wp_enqueue_scripts', array($this, 'enqueue_styles'));
	}

	function enqueue_scripts() {
		$theme_path = get_stylesheet_directory_uri();
		$initial_data = array();
		$post = get_post();

		if ( is_single() ) {
			// TODO: There must be a clean way to get the same format as with the REST API
			$initial_data[ 'POST_DATA' ] = array(
				'title' => array(
					'rendered' => $post->post_title
				),
				'content' => array(
					'rendered' => wpautop( $post->post_content )
				),
				'featured_image' => get_the_post_thumbnail_url( null, 'full' ),
				'slug' => $post->post_name,
				'type' => $post->post_type
			);
		}

		wp_register_script( 
			'bundle', 
			$theme_path . '/client/dist/bundle.js',
			array(),
			'1.0',
			true
		);
		wp_enqueue_script( 'bundle' );
		wp_localize_script( 'bundle', 'INITIAL_DATA', $initial_data );
	}

	function enqueue_styles() {
		$theme_path = get_stylesheet_directory_uri();
		
		wp_enqueue_style( 'style', $theme_path . '/client/dist/style.css' );
	}

}

new Enqueue_Scripts();