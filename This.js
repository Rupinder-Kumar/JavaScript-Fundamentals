
// this is the object the function is property of
// # benefits of this
// 1: gives methods access to their object
// 2: execute same code for multiple objects
const obj = {
    name: 'Billy',
    sing: function() {
      return 'llala ' + this.name + '!'
    },
    singAgain: function() {
      return this.sing()
    }
  }
  
  function importantPerson() {
    console.log(this.name)
  }
  
  const name = 'Sunny';
  const obj1 = { name: 'Cassy', importantPerson: importantPerson}
  const obj2 = { name: 'Jacob', importantPerson: importantPerson}
  
  obj2.importantPerson()