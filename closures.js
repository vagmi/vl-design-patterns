window.MyApp = window.MyApp || {}

MyApp.delay = function(nsecs,myFunctionality){
  setInterval(myFunctionality,nsecs);
}

MyApp.Greeter = function(name, delay){
  this.name=name;
  this.delay = delay;
}
MyApp.Greeter.prototype.greet = function() {
  var message = "Hello, " + this.message;
  var abc=1;
  var greeter = function(){
    console.log(message);
  }
  MyApp.delay(this.delay,greeter);
}

MyApp.Person = function(){
  var firstName;
  var lastName;

  return {
    getFirstName: function(){
      return firstName;
    },
    getLastName: function(){
      return lastName;
    },
    setFirstName: function(val) {
      firstName=val;
    },
    setLastName: function(val) {
      lastName=val;
    },
    getFullName: function() {
      return firstName + " " + lastName;
    }
  }
}
