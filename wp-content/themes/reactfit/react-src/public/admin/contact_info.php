<?php
/*
 * This is the template to display the form on the Contact Info
 * settings screen, created in functions.php to manage the custom
 * Contact Info setting used to display contact info in the site
 * header, footer, and on pages displayed via Home, Get Started,
 * About Us, and Contact Us React templates
 */
?>

<div class="wrap">
  <form action="options.php" method="POST">
    <?php
      do_settings_sections('reactfit-contact-info');
      settings_fields('reactfit_settings');
      submit_button();
    ?>
  </form>
</div>
