const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const { pathname } = reqUrl;

    if (pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (pathname === '/students') {
        const databasePath = process.argv[2];
        
        res.setHeader('Content-Type', 'text/plain');

        countStudents(databasePath)
            .then(() => {
                const successMessage = 'This is the list of our students\n';
                res.statusCode = 200;
                res.write(successMessage);

                // Reuse the function output to add it to the response.
                countStudents(databasePath).then(() => {
                    res.end();
                }).catch((err) => {
                    res.end(err.message);
                });
            })
            .catch((error) => {
                res.statusCode = 500;
                res.end('Cannot load the database');
            });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
