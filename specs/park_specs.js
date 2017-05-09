var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");

describe("Park", function(){

  it("Starts empty",function(){
    var park = new Park();
    assert.equal(0, park.enclosure.length);
  });

  it("Can add Dinosaurs",function(){
    var park = new Park();
    var dinosaur1 = new Dinosaur("Tyrannosaurus Rex", 2);
    var dinosaur2 = new Dinosaur("Tricerotops", 4);
    park.add(dinosaur1);
    park.add(dinosaur2);
    assert.equal(2, park.enclosure.length);
  });
});
