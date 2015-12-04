'use strict';

function testPromise () {
  log = document.getElementById('log');
  log.innerHTML = "<code>Promise<code> is supported! YAY!";
}
if ("Promise" in window) {
  var testbtn = document.getElementById("btn");
   testbtn.addEventListener("click",testPromise);
}
else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}