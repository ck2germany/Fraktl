const render = function () {
  var canvas = document.getElementById("canvas");
  //instead of a 2d context, we choose webgl here
  var context = canvas.getContext("webgl");

  //alert for users who aren't supported
  if (!context) {
    alert("Unable to initialize WebGL, most commonly a browser upgrade is needed");
  }

  //draw a black box just to see
  context.clearColor(0.0, 0.0, 0.0, 1.0);
  context.clear(context.COLOR_BUFFER_BIT);



};
