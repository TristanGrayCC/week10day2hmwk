var Park = function(){
  this.enclosure = [];
}

Park.prototype ={
  add: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeType: function(findType){
    for(i=this.enclosure.length-1; i>=0; i--) {
      if(this.enclosure[i].type === findType) {
        this.enclosure.splice(i,1)
      };
    };
  },

  collecteBreeders: function(findType){
    var breeders = [];
    for(dinosaur of this.enclosure) {
      if(dinosaur.noOfOffspring > 2) {
        breeders.push(dinosaur);
      }
    }
    console.log("Breed: ", breeders);
    return breeders;
  }
}

module.exports = Park;
