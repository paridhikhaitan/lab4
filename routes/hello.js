
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.username;
  res.render('hello', {
  	'name': nameToShow,
  });
};
