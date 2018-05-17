'use strict';

const querystring = require('querystring');

module.exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
    const submitted = querystring.parse(event.body).link;
    const prefix = event.headers.Referer || 'http://mysite.com';
    const base_page = `<html>
<body>
    <h3>URL ${submitted} has been shortened:
        <a href="https://${prefix}/fake">${prefix}/fake</a>
    </h3>
</body>
</html>`;

    console.log('URL submitted: ' + submitted);
    callback(
        null,
        {
            statusCode: 200,
            body: base_page,
            headers: {'Content-Type': 'text/html'}
        }
    );
}