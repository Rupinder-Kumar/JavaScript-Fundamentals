// In JavaScript our lexical scoper (available data + variables where the function was defined) determines our available variables. not where the function is called (dynamic scope)
//Exercise:
const a = function() {
    console.log(this)
    const b = function() {
      console.log(this)
      const c = {
        hi: function() {
       console.log(this)
      }}
      c.hi()
    }
    b()
  }
  
  a()
  
  //JS is weird:
  const obj = {
    name: 'Billy',
    sing: function() {
      console.log(this) // in this case, it's a method on an object.
      var anotherFunc = function() {
        console.log(this)// this points to windows!
      }
    }
  }
  