

document.addEventListener("DOMContentLoaded", () => {
  const mycanvas = document.getElementById("it");
  //instead of a 2d context, we choose webgl here
  if (!mycanvas) {
    console.log("no element");
  }
  const context = mycanvas.getContext("webgl");

  //alert for users who aren't supported
  if (!context) {
    alert("Unable to initialize WebGL, most commonly a browser upgrade is needed");
  }
  mycanvas.width = 300;
  mycanvas.height = 300;
  //draw a black box just to see
  context.clearColor(0.0, 0.0, 0.0, 1.0);
  context.clear(context.COLOR_BUFFER_BIT);

});
