'use strict';

const base_page = `<html>
<head>
<title>dev-s</title>
</head>
<body>
<!-- Google Tag Manager -->
  <script>(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WSXD722');</script>
<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSXD722" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
<!-- End Google Tag Manager (noscript) -->
<h1>Hi!</h1>
    <form method="POST" action="">
        <label for="uri">Link:</label>
        <input type="text" id="link" name="link" size="40" autofocus/>
        <br/>
        <br/>
        <input type="submit" value="Shorten it!" />
    </form>
</body>
</html>`

module.exports.handler = (event, context, callback) =>{
    console.log(JSON.stringify(event));
    callback(
        null,
        {
            statusCode: 200,
            body: base_page,
            headers: {'Content-Type': 'text/html'} 
        }
    );
}

