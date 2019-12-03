<?php

// Add menu in WP back-end for the header menu
function reactfit_register_menus() {
  register_nav_menus( array(
      'header-menu' => __( 'Header Menu' )
    )
  );
}
add_action( 'after_setup_theme', 'reactfit_register_menus' );

// Get all header info, and make it available via the REST API
// Get the header menu
function reactfit_get_header_menu() {
  return wp_get_nav_menu_items( get_nav_menu_locations()['header-menu'] );
}
// Get the site logo for the header -- depends on reactfit_logo_in_customizer, below
function reactfit_get_header_logo() {
  return get_theme_mod( 'reactfit_logo' );
}
// Get all header info and combine it into one array
function reactfit_get_all_header_stuff() {
  $all = array(
    'menu' => reactfit_get_header_menu(),
    'logo' => reactfit_get_header_logo(),
  );
  return $all;
}
// Create custom endpoint for header info via REST API
add_action( 'rest_api_init', function() {
  register_rest_route( 'reactfit', '/header', array(
    'methods' => 'GET',
    'callback' => 'reactfit_get_all_header_stuff',
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
      'reactfit_program',
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
  register_post_type( 'reactfit_program', array(
    'labels' => array(
      'name' => 'Programs',
      'singular_name' => 'Program',
    ),
    'public' => true,
    'menu_icon' => 'dashicons-carrot',
    'show_in_rest' => true,
    'rest_base' => 'programs',
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
    'Contact Information & Class Hours',
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

  register_setting(
    'reactfit_settings',
    'reactfit_crossfit_hours',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_crossfit_hours_field',
    'CrossFit class hours: (separate with a comma)',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_crossfit_hours',
      'id' => 'reactfit_crossfit_hours_field',
      'type' => 'text',
      'class' => 'admin-text--long'
    )
  );

  register_setting(
    'reactfit_settings',
    'reactfit_open-bay_hours',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_open-bay_hours_field',
    'Saturday Open Bay hours: (starting and ending)',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_open-bay_hours',
      'id' => 'reactfit_open-bay_hours_field',
      'type' => 'text',
    )
  );

  register_setting(
    'reactfit_settings',
    'reactfit_kids_days',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_kids_days_field',
    'Kids Class days:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_kids_days',
      'id' => 'reactfit_kids_days_field',
      'type' => 'text',
    )
  );

  register_setting(
    'reactfit_settings',
    'reactfit_kids_time',
    array(
      'type' => 'string',
    )
  );
  add_settings_field(
    'reactfit_kids_time_field',
    'Kids Class start time:',
    'reactfit_contact_info_fields',
    'reactfit-contact-info',
    'reactfit-settings-section',
    array(
      'label_for' => 'reactfit_kids_time',
      'id' => 'reactfit_kids_time_field',
      'type' => 'text',
    )
  );
}
function reactfit_contact_info_heading() {
  ?>
  <p>These settings will update the contact info and class hours displayed in the header, footer, and main pages.</p>
  <?php
}
function reactfit_contact_info_fields( $args ) {
 ?>
 <input id="<?php echo esc_attr( $args['id'] ); ?>" name="<?php echo esc_attr( $args['label_for'] ); ?>" type="<?php echo esc_attr( $args['type'] ); ?>" value="<?php echo get_option( $args['label_for'] ); ?>" class="<?php echo $args['class'] ? esc_attr( $args['class'] ) : ''; ?>">
 <?php
}
add_action( 'admin_init', 'reactfit_contact_info_init' );

// Add menu page to display/manage contact info settings
function reactfit_contact_info_menu() {
  if ( ! current_user_can( 'manage_options' ) ) {
    return;
  }

  add_menu_page(
    'Contact Info & Hours',
    'Contact & Hours',
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
  $crossfit_classes = reactfit_parse_hours( get_option('reactfit_crossfit_hours') );
  return array (
    'email' => get_option('reactfit_email'),
    'phone' => get_option('reactfit_phone'),
    'address' => get_option('reactfit_address'),
    'facebook' => get_option('reactfit_facebook'),
    'instagram' => get_option('reactfit_instagram'),
    'hours' => array(
      'crossfit' => $crossfit_classes,
      'open_bay' => get_option('reactfit_open-bay_hours'),
      'kids_days' => get_option('reactfit_kids_days'),
      'kids_time' => get_option('reactfit_kids_time'),
    ),
  );
}
add_action( 'rest_api_init', function() {
  register_rest_route( 'reactfit', '/contact-info', array(
    'methods' => 'GET',
    'callback' => 'reactfit_get_contact_info',
  ));
});
// Function to split listed hours into arrays
function reactfit_parse_hours( $input ) {
  return array_map( 'trim', explode( ',', $input ) );
}

// Add a full-size logo field to the customizer
function reactfit_logo_in_customizer( $wp_customize ) {
  // add a setting for the site logo
  $wp_customize->add_setting('reactfit_logo');
  // Add a control to upload the logo
  $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'reactfit_logo',
  array(
  'label' => 'Upload Logo',
  'section' => 'title_tagline',
  'settings' => 'reactfit_logo',
  ) ) );
}
add_action('customize_register', 'reactfit_logo_in_customizer');
