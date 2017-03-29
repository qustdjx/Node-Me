/**
 * Created by Jason on 2017/3/21.
 * Abstract: the index
 */
//express_demo.js 文件
var path= require('path');
var express = require('express');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine( '.html', require( 'ejs' ).__express );

// 设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

var server = app.listen(7001, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})