'use strict';

function fn() {
  const Person1 = {
    name: 'Ivan'
  };

  const Person2 = {
    name: 'Max'
  };
  Person1.name = 'Sanya';
  Person2.name = 'Mykyta';
  console.log(Person1.name, Person2.name);
}
fn();
module.exports = { fn };
