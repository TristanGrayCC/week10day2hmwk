var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");

describe("Park", function(){

  it("Starts empty",function(){
    var park = new Park();
    assert.equal(0, park.enclosure.length);
  });
});
