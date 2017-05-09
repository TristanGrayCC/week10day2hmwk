var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  it("Has attributes",function(){
    var dinosaur = new Dinosaur("Tyrannosaurus Rex", 2);
    assert.equal("Tyrannosaurus Rex", item.type);
    assert.equal(2, item.noOfOffspring);
  });
});
