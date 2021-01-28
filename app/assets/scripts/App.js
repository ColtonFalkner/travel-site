import '../styles/styles.css'
import Person from './modules/Person.js'

if (module.hot) {
  module.hot.accept()
}

////////////////////////

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes 0 in taxes')
  }
}

var John = new Person('John Doe', 'blue')
John.greet()

let Jane = new Adult('Jane Smith', 'green')
Jane.greet()
Jane.payTaxes()
