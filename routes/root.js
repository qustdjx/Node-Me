/**
 * Created by Jason Ding on 2017/3/29.
 */
module.exports = function ( app ) {
    app.get('/', function (req, res) {
        res.render('index',{'title':'FIRST PAGE','content':'Hello World'});
    })
}