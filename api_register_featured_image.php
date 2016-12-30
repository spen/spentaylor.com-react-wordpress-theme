<?php

function get_portfolio_item_featured_image_url( $object ) {
    $thumbnail_id = get_post_thumbnail_id( $object['id'] );
    if ( $thumbnail_id ) {
        $imgArray = wp_get_attachment_image_src( $thumbnail_id, 'full' );
        $imgURL = $imgArray[0];
        return $imgURL;
    } else {
        return null;
    }
}

function register_portfolio_rest_fields() {
    register_rest_field( 'jetpack-portfolio', 'featured_image', array(
        'get_callback'    => 'get_portfolio_item_featured_image_url',
        'update_callback' => null,
        'schema'          => null,
    ) );
}

add_action( 'rest_api_init', 'register_portfolio_rest_fields' );
