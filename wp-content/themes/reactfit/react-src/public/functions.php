<?php

function reactfit_register_menus() {
  register_nav_menus( array(
      'header-menu' => __( 'Header Menu' )
    )
  );
}
add_action( 'after_setup_theme', 'reactfit_register_menus' );
