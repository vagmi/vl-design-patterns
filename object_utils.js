window.MyApp = window.MyApp || {};

MyApp.extend = function(obj1, obj2) {
  var keys = 0;
  for(var key in obj2) {
    keys = keys + 1;
    obj1[key] = obj2[key];
  }
  console.log("So many keys processed " + keys);
}

MyApp.inherit = function(klass1, klass2) {
  MyApp.extend(klass1.prototype, klass2.prototype);
}

MyApp.utility = function() {
  console.log(keys);
}
