const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();
const result = fight(myTiger, myWolf);

//TODO 3 : Impor class Tiger dan Wolf
const Tiger = require('./Tiger');
console.log(Tiger);

const Wolf = require('./Wolf');
console.log(Wolf);

//TODO 4: Ekspor fungsi fight, myTiger, myWolf, dan result
module.exports = {fight, myTiger, myWolf, result}; 