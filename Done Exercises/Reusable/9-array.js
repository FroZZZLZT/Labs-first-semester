'use strict';

const phonebook = [{
  name: 'Marcus Aurelius',
  phone: '+380445554433'
},
{ name: 'Ivan Froz', phone: '+380507777777' },
{ name: 'Max Tankist', phone: '+380661111111' }
];
const hash = {
  'Marcus Aurelius': '+380445554433',
  'Ivan Froz': '+380507777777',
  'Max Tankist': '+380661111111',
};
/*const findPhoneByName = (name) => {
        for (let key of phonebook) {
            if (key.name === name) {
                return key.phone;
            }
        }

    }; */

const findPhoneByName = name => hash[name];



console.dir(findPhoneByName('Ivan Froz'));

module.exports = { phonebook, findPhoneByName };
