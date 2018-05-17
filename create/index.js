'use strict';
const prefix = "mysite.com";
const base_page = `<html>
<body>
    <h3>URL has been shortened:
        <a href="https://${prefix}/fake">${prefix}/fake</a>
    </h3>
</body>
</html>'`

module.exports.handler = (event, context, callback) => {
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