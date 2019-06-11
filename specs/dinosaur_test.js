const assert = require('assert');
const Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){
  beforeEach(function(){
    dinosaur = new Dinosaur('T-Rex', 'carnivore', 50);
  });
  it('should have a species', function(){
    const actual = dinosaur.species;
    assert.strictEqual(actual, 'T-Rex');
  });
  it('should have a diet', function(){
    const actual = dinosaur.diet;
    assert.strictEqual(actual, 'carnivore');
  });
  it('should attract vistors each day', function(){
    const actual = dinosaur.attracted_vistors_pd;
    assert.strictEqual(actual, 50);
  });
});
