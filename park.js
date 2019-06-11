const Park = function(name, price, dinosaurs, diet){
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
  this.diet = diet;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.deleteDinosaur = function(dinosaur){
  spliceThis = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice((spliceThis), 1)
};

Park.prototype.findAttractive = function(){
  const visitors = [];
  for(dinosaur of this.dinosaurs){
    visitors.push(dinosaur.attracted_vistors_pd)
  }
  visitors.sort(function(a, b){
    if (a > b){
      return -1
    }
    else if (b > a){
      return 1
    }
    else{
      return 0
    }
  })
  const final = visitors[0]
  let most
  for (dinosaur of this.dinosaurs){
    if (dinosaur.attracted_vistors_pd == final){
      most = dinosaur
    }
  }
  return most
}

Park.prototype.findSpecies = function(type){
  const found_species = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === type){
      found_species.push(dinosaur)
    }
  }
  return found_species
}

Park.prototype.totalVisitors = function(){
  let total = 0;
  for (const dinosaur of this.dinosaurs){
    total += dinosaur.attracted_vistors_pd;
  };
  return total;
};

Park.prototype.visitorsPerYear = function(){
  const total = this.totalVisitors() * 365
  return total;
}

Park.prototype.totalRevenue = function(){
  const total = this.visitorsPerYear() * this.price;
  return total;
}

Park.prototype.removeBySpecies = function(species){
  const newDinos = []
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species !== species){
      newDinos.push(dinosaur)
    }
  }
  this.dinosaurs = newDinos
}

Park.prototype.dietTypes = function(){
  let diet = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0}
  for (dinosaur of this.dinosaurs){
    if (dinosaur.diet === 'carnivore'){
      diet.carnivore += 1
    }else if (dinosaur.diet === 'herbivore'){
      diet.herbivore += 1
    }else if (dinosaur.diet === 'omnivore'){
      diet.omnivore += 1
    }
  }
  return diet
}


module.exports = Park;
