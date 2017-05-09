var assert = require("assert");
var ShoppingBasket = require("../dinosaur.js");
var Item = require("../park.js");

describe("Park", function(){

  it("Starts empty",function(){
    var park = new Park();
    assert.equal([], park.enclosure);
  });
});
