// $.get("/survey", function(data) {
//     for (var i = 0; i < survey.length; i++) {
//       console.log(data[i]);
//       var listGroupItem = $("<li class='list-group-item'>");
  
//       listGroupItem.append($("<h2>").text("Question : " + data[i].name));
//       listGroupItem.append($("<h3>").text("Option 1 : " + data[i].phone));
//       listGroupItem.append($("<h3>").text("Option 2: " + data[i].email));
//       listGroupItem.append($("<h3>").text("Option 3: " + data[i].uniq));
  
//       $("#reservation-section").append(listGroupItem);
//     }
//   });

  

// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};