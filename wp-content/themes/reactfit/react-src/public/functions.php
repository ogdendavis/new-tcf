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

// Add custom settings for contact info, and settings page to manage
function reactfit_contact_info_init() {
  // check user capabilities
  if ( ! current_user_can( 'manage_options' ) ) {
    return;
  }

  add_settings_section(
    'reactfit-settings-section',
    'Contact Information',
    'reactfit_contact_info_heading',
    'reactfit-contact-info'
  );

  register_setting(
    'reactfit_settings',
    'reactfit_email',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_email_field',
    'Email:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_email',
      'id' => 'reactfit_email_field',
      'type' => 'email'
    ),
  );

  register_setting(
    'reactfit_settings',
    'reactfit_phone',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_phone_field',
    'Phone:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_phone',
      'id' => 'reactfit_phone_field',
      'type' => 'tel',
    )
  );

  register_setting(
    'reactfit_settings',
    'reactfit_address',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_address_field',
    'Address:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_address',
      'id' => 'reactfit_address_field',
      'type' => 'text',
    )
  );

  register_setting(
    'reactfit_settings',
    'reactfit_facebook',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_facebook_field',
    'Facebook Profile URL:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_facebook',
      'id' => 'reactfit_facebook_field',
      'type' => 'url',
    )
  );

  register_setting(
    'reactfit_settings',
    'reactfit_instagram',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_instagram_field',
    'Instagram Profile URL:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_instagram',
      'id' => 'reactfit_instagram_field',
      'type' => 'url',
    )
  );
}
function reactfit_contact_info_heading() {
  ?>
  <p>These settings will update the contact info displayed in the header, footer, and main pages.</p>
  <?php
}
function reactfit_contact_info_fields( $args ) {
 ?>
 <input id="<?php echo esc_attr( $args['id'] ); ?>" name="<?php echo esc_attr( $args['label_for'] ); ?>" type="<?php echo esc_attr( $args['type'] ); ?>" value="<?php echo get_option( $args['label_for'] ); ?>">
 <?php
}
add_action( 'admin_init', 'reactfit_contact_info_init' );

// Add menu page to display/manage contact info settings
function reactfit_contact_info_menu() {
  if ( ! current_user_can( 'manage_options' ) ) {
    return;
  }

  add_menu_page(
    'Contact Info',
    'Contact Info',
    'manage_options',
    'reactfit-contact-info',
    'reactfit_contact_info_markup',
    null,
    25
  );
}
function reactfit_contact_info_markup() {
  include( plugin_dir_path(__FILE__) . 'admin/contact_info.php' );
}
add_action( 'admin_menu', 'reactfit_contact_info_menu' );

// Expose contact info settings to REST API
function reactfit_get_contact_info() {
  return array (
    'email' => get_option('reactfit_email'),
    'phone' => get_option('reactfit_phone'),
    'address' => get_option('reactfit_address'),
    'facebook' => get_option('reactfit_facebook'),
    'instagram' => get_option('reactfit_instagram'),
  );
}
add_action( 'rest_api_init', function() {
  register_rest_route( 'reactfit', '/contact-info', array(
    'methods' => 'GET',
    'callback' => 'reactfit_get_contact_info',
  ));
});
