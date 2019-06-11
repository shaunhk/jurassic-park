const assert = require('assert')
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js')

describe('Park', function(){
   beforeEach(function(){
     dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 100)
     dinosaur2 = new Dinosaur('Brontosaurus', 'herbivore', 80)
     dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 50)
     dinosaur4 = new Dinosaur('Archaeopteryx', 'omnivore', 90)
     dinosaur5 = new Dinosaur('Brontosaurus', 'herbivore', 85)
     dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]
     park = new Park('Jurassic Park', 2500, dinosaurs)
   });
   it('should have a name', function(){
     const actual = park.name;
     assert.strictEqual(actual, 'Jurassic Park')
   });
   it('should have a price', function(){
     const actual = park.price;
     assert.strictEqual(actual, 2500)
   });
   it('should have dinosaurs', function(){
     const actual = park.dinosaurs.length;
     assert.strictEqual(actual, 5)
   });
   it('should be able to add dinosaurs', function(){
     park.addDinosaur(dinosaur4)
     const actual = park.dinosaurs.length;
     assert.strictEqual(actual, 6)
   })
   it('should be able to remove dinosaurs', function(){
     park.deleteDinosaur(dinosaur2)
     const actual = park.dinosaurs.length;
     assert.strictEqual(actual, 4)
   })
   it('should be able to find the most attractive dinosaur', function(){
     const actual = park.findAttractive();
     assert.strictEqual(actual, dinosaur1)
   })
   it('should find all dinosaurs of a particular species', function(){
     const actual = park.findSpecies('Brontosaurus');
     assert.deepStrictEqual(actual, [dinosaur2, dinosaur5])
   })
   it('should calculate the total number of visitors per day', function(){
     const actual = park.totalVisitors();
     assert.strictEqual(actual, 405);
   })
   it('should calculate the total number of visitors per year', function(){
     const actual = park.visitorsPerYear();
     assert.strictEqual(actual, (405*365));
   })
   it('should calculat the total revenue from ticket sales for one year', function(){
     const actual = park.totalRevenue();
     assert.strictEqual(actual, (405*365*2500))
   })
   it('should be able to remove all dinosaurs of a particular species', function(){
     park.removeBySpecies('Brontosaurus')
     actual = park.dinosaurs.length;
     assert.strictEqual(actual, 3)
   })
   it('should return an object of diet types', function(){
     actual = park.dietTypes();
     assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore': 2, 'omnivore': 1})
   })
})
