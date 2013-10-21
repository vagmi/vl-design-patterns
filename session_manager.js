window.MyApp = window.MyApp || {};

MyApp.SessionManager = function() {
  this.sessionAdapters={}
}

MyApp.SessionManager.prototype.registerAdapter=function(type,sessionAdapter) {
  this.sessionAdapters[type] = sessionAdapter;
}

MyApp.SessionManager.prototype.use =function(type) {
  this.currentSessionAdapter = this.sessionAdapters[type];
}

MyApp.SessionManager.prototype.setValue = function(key,value) {
  this.currentSessionAdapter.setValue(key,value);
};
MyApp.SessionManager.prototype.getValue = function(key) {
  return this.currentSessionAdapter.getValue(key);
};
MyApp.SessionManager.prototype.clear = function() {
  this.currentSessionAdapter.clear();
};
MyApp.SessionManager.prototype.deleteValue = function(key) {
  this.currentSessionAdapter.deleteValue();
};

window.MyApp.sessionManager = new MyApp.SessionManager();
MyApp.sessionManager.registerAdapter('memory',new MyApp.InMemorySession());
MyApp.sessionManager.registerAdapter('local_storage',new MyApp.LSSession());

