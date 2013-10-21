window.MyApp = window.MyApp || {};

MyApp.Factory = function() {
  var Type1 = function(){
    this.objectType = "Type1";
  }
  var Type2 = function(){
    this.objectType = "Type2";
  }

  var types = {"type1": Type1, "type2": Type2};
  this.createInstance = function(typeName) {
    return new types[typeName]();
  }
}

MyApp.Factory.getInstance = function(){
  if(MyApp.Factory.instance===undefined) {
    MyApp.Factory.instance = new MyApp.Factory();
  }
  return MyApp.Factory.instance;
}

MyApp.Factory.createInstance = function(typeName) {
  return MyApp.Factory.getInstance().createInstance(typeName);
}
