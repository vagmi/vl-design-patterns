window.MyApp = window.MyApp || {};

MyApp.InMemorySession = function(){
  this.values = {}
};
MyApp.InMemorySession.prototype.setValue = function(key,value) {
  this.values[key] = value;
};
MyApp.InMemorySession.prototype.getValue = function(key) {
  return this.values[key];
};
MyApp.InMemorySession.prototype.clear = function() {
  this.values={}
};
MyApp.InMemorySession.prototype.deleteValue = function(key) {
  delete this.values[key];
};


MyApp.LSSession = function(){
  this.prefix="myapp"
};
MyApp.LSSession.prototype.setValue = function(key,value) {
  window.localStorage.setItem(this.prefix+key,value);
};
MyApp.LSSession.prototype.getValue = function(key) {
  var value = window.localStorage.getItem(this.prefix+key)
  return value;
};
MyApp.LSSession.prototype.clear = function() {
  window.localStorage.clear();
};
MyApp.LSSession.prototype.deleteValue = function(key) {
  window.localStorage.removeItem(this.prefix+key)
};
