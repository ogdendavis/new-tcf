<?php

function reactfit_register_menus() {
  register_nav_menus( array(
      'header-menu' => __( 'Header Menu' )
    )
  );
}
add_action( 'after_setup_theme', 'reactfit_register_menus' );

// Need custom function to get menu item in order to send it out via REST API
function reactfit_get_header_menu() {
  return wp_get_nav_menu_items( get_nav_menu_locations()['header-menu'] );
}
// Creating custom endpoint for menu via REST API
add_action( 'rest_api_init', function() {
  register_rest_route( 'reactfit', '/header-menu', array(
    'methods' => 'GET',
    'callback' => 'reactfit_get_header_menu',
  ));
});

// NOT USED - using default WP API endpoint for pages, instead: /wp-json/wp/v2/pages
// Getting page info for use with React Router
// function reactfit_get_pages() {
//   return get_pages();
// }
// add_action( 'rest_api_init', function () {
//   register_rest_route( 'reactfit', '/pages', array(
//     'methods' => 'GET',
//     'callback' => 'reactfit_get_pages',
//   ));
// });

// Server render Contact Form 7 form via shortcode
function reactfit_render_form( $data ) {
  return do_shortcode('[contact-form-7 id="' . $data['id'] . '"]');
}
add_action( 'rest_api_init', function() {
  register_rest_route( 'reactfit', '/contact-form/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'reactfit_render_form',
  ));
});

// Add all ACF fields on a page to the page's API response
function reactfit_get_custom_fields($object) {
  return get_fields($object['id']);
}
add_action( 'rest_api_init', function () {
  register_rest_field(
    array(
      'page',
      'reactfit_trainer',
      'reactfit_testimonial',
    ),
    'acf_fields',
    array(
    'get_callback' => 'reactfit_get_custom_fields',
    )
  );
});

// Add custom post types!
function reactfit_custom_post_types() {
  register_post_type( 'reactfit_trainer', array(
    'labels' => array(
        'name' => 'Coaches',
        'singular_name' => 'Coach',
      ),
      'public' => true,
      'menu_icon' => 'dashicons-businessman',
      'show_in_rest' => true,
      'rest_base' => 'coaches',
  ));
  register_post_type( 'reactfit_testimonial', array(
    'labels' => array(
      'name' => 'Testimonials',
      'singular_name' => 'Testimonial',
    ),
    'public' => true,
    'menu_icon' => 'dashicons-format-quote',
    'show_in_rest' => true,
    'rest_base' => 'testimonials',
  ));
}
add_action( 'init', 'reactfit_custom_post_types' );
