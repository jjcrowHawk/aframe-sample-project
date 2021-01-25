/* CREATING AND REGISTERING COMPONENTS*/
AFRAME.registerComponent("change-color", {
  /* COMPONENT SCHEMA */
  schema: {
    color: { default: "green" },
    event: { default: "mouseenter" }
  },
  init: function () {
    var el = this.el;
    // GETTING DATA FROM SCHEMA
    var data = this.data;
    console.log(el);
    var defaultColor = el.getAttribute("material").color;
    el.addEventListener(data.event, function () {
      el.setAttribute("color", data.color)
    });
    el.addEventListener("mouseleave", function () {
      el.setAttribute("color", defaultColor)
    });

  },
  play: function () {
    console.log("Play");
  },
  pause: function () {
    console.log("Pause");
  }
})