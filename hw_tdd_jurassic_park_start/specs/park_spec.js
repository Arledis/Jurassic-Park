const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('Tyrannosaurus Rex', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Diplodocus', 'herbivore', 60);
    dinosaur3 = new Dinosaur('Titanosaurus', 'omnivore', 90);
    dinosaur4 = new Dinosaur('Velociraptor', 'carnivore', 45);
    dinosaur5 = new Dinosaur('Triceratops', 'herbivore', 55);
    park = new Park('Jurassic', 30, []);
  });

  it('should have a name',
  function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price',
  function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30)
  });

  it('should have a collection of dinosaurs',
  function () {
    const expected = [];
    assert.deepStrictEqual(park.dinosaursCollection, expected);
  });

  it('should be able to add a dinosaur to its collection',
  function () {
    park.addDinosaur('Diplodocus')
    const actual = park.dinosaursCollection;
    assert.deepStrictEqual(actual, ['Diplodocus'])
  });

  it('should be able to remove a dinosaur from its collection',
  function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeDinosaursFromCollection(dinosaur1);
    const expected = [dinosaur2, dinosaur3, dinosaur4, dinosaur5];
    const actual = park.dinosaursCollection;
    assert.deepEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors',
  function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    // park.findMostVisitorsAttracted(dinosaur3);
    // const expected = [find]
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species',
  // function () {
  //
  );

});
