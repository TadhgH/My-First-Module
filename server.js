var github = require("./github.js");

var username  = "TadhgH";

github.repo(username, function(repo){
  console.log(username,"\'s repo: ",repo);
});
