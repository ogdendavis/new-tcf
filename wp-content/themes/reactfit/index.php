<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/react-scripts-wptheme-utils/wpThemeClient.js'></script>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/react-scripts-wptheme-error-overlay/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

  <script type="text/javascript">
    var reactfitHomeUrl = '<?php echo get_bloginfo('url'); ?>'
  </script>
  <script src="https://kit.fontawesome.com/a0782f7d6f.js" crossorigin="anonymous"></script>
  <meta charset="utf-8" />
  <link rel="shortcut icon" href="/new-tcf/wp-content/themes/reactfit/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta
    name="description"
    content="Web site created using create-react-wptheme"
  />
  <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
  <!--
    manifest.json provides metadata used when your web app is installed on a
    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
  -->
  <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json">
  <!--
      If you're reading this from "view source" in your browser, it might not make sense as
      these tokens have already been evaluated and replaced, even in this remark blurb.

      Notice the use of "php echo $TEMPLATE_PATH;" and /new-tcf/wp-content/themes/reactfit in the tags above.
      Both will be replaced with the URL of the `public` folder during the build (/new-tcf/wp-content/themes/reactfit) or
      at render time (php echo $TEMPLATE_PATH;)
      Only files inside the `public` folder can be referenced like this.

      Unlike "/favicon.ico" or "favicon.ico", "/new-tcf/wp-content/themes/reactfit/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run wpbuild`.
  -->
  <title>React WordPress Theme</title>
<link href="/new-tcf/wp-content/themes/reactfit/static/css/main.chunk.css?9e1026ac2577be168283" rel="stylesheet"></head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    <script src="/new-tcf/wp-content/themes/reactfit/static/js/bundle.js?9e1026ac2577be168283"></script><script src="/new-tcf/wp-content/themes/reactfit/static/js/0.chunk.js?9e1026ac2577be168283"></script><script src="/new-tcf/wp-content/themes/reactfit/static/js/main.chunk.js?9e1026ac2577be168283"></script></body>
</html>
