var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');
var path = require('path');
var fs = require('fs');
gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            port: 8090,
            host: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            middleware: function (req, res, next) {
                var paths = url.parse(req.url, true).path;
                var pathsName = path.join(__dirname, './Data', paths + '.json');
                fs.exists(pathsName, function (exists) {
                    if (exists) {
                        fs.readFile(pathsName, function (err, data) {
                            if (err) {
                                throw err
                            } else {
                                res.writeHead(200, {
                                    'Content-Type': 'text/json;charset=utf8',
                                    'Access-Control-Allow-Origin': '*'
                                });
                                res.end(data.toString())
                            }
                        })
                    } else {
                        res.writeHead(404, {
                            'Content-Type': 'text/json;charset=utf8'
                        });
                        res.end('can not find this file'+pathsName)
                    }
                })
            }
        }))
});