window.MyApp = window.MyApp || {};
MyApp.Singleton = function() { }
MyApp.Singleton.getInstance = function() {
  var instance = MyApp.Singleton.instance;
  if(instance===undefined) {
    instance = new MyApp.Singleton();
    MyApp.Singleton.instance = instance;
  }
  return instance;
}
