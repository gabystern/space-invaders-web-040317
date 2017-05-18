class Spaceship {
  constructor(name, crew, phasers, shields, cloaked=false, warpDrive="disengaged", phasersCharge="uncharged") {
    this.name = name
    this.crew = crew
    for (let i = 0, l = this.crew.length; i < l; i++) {
      this.crew[i].currentShip = this
    }
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    if (this.crew.length > 0) {
      this.docked = false
    }
    else {
      this.docked = true
    }
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
  }
  

}
