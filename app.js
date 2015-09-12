/**
 * Created by Deepak Sisodiya on 12/09/15.
 */

var express = require('express');
var app = express();

/*
app.use('/', function (req, res) {
  console.log('home page');
});
*/

var adminRouter = express.Router();

// middleware
adminRouter.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// localhost:3000/admin
adminRouter.get('/', function (req, res) {
  console.log('admin page');
});

// localhost:3000/admin/users
adminRouter.get('/users', function (req, res) {
  console.log('admin/users page')
});

app.use('/admin', adminRouter);

var port = 3000;
app.listen(port, function () {
  console.log('listening on post', port);
});