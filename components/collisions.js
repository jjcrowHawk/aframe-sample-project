/* AFRAME COLLISION DETECTOR */
AFRAME.registerComponent("collision-detector", {
  init: function () {
    console.log("COLLISION")
    var el = this.el;
    el.addEventListener("collide", function (e) {
      console.log("collids with: " + e.detail.body.el.id)
    })
  }
})

/* AFRAME IMPULSE DETECTOR */
AFRAME.registerComponent("apply-force", {
  init: function () {
    var el = this.el
    el.addEventListener("click", function (e) {
      console.log('applying force')
      el.body.applyForce(
        new CANNON.Vec3(0, 0, -500),
        new CANNON.Vec3().copy(el.getAttribute("position"))
      )
    })
  }
})