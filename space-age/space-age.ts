class SpaceAge {

  public seconds: number;
  private secondsPerEarthYear = 31557600
  private mercuryToEarthYearsRatio = 0.2408467;
  private venusToEarthYearsRatio = 0.61519726;
  private marsToEarthYearsRatio = 1.8808158;
  private jupiterToEarthYearsRatio = 11.862615;
  private saturnToEarthYearsRatio = 29.447498;
  private uranusToEarthYearsRatio = 84.016846;
  private neptuneToEarthYearsRatio = 164.79132;

  constructor(ageInSeconds: number){
    this.seconds = ageInSeconds;
  }

  onEarth = () => {
    return Math.round(((this.seconds / this.secondsPerEarthYear) + Number.EPSILON) * 100) / 100; 
  }

  onMercury = () => {
    return Math.round(((this.onEarth() / this.mercuryToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }

  onVenus = () => {
    return Math.round(((this.onEarth() / this.venusToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }

  onMars = () => {
    return Math.round(((this.onEarth() / this.marsToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }

  onJupiter = () => {
    return Math.round(((this.onEarth() / this.jupiterToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }

  onSaturn = () => {
    return Math.round(((this.onEarth() / this.saturnToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }

  onUranus = () => {
    return Math.round(((this.onEarth() / this.uranusToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }

  onNeptune = () => {
    return Math.round(((this.onEarth() / this.neptuneToEarthYearsRatio) + Number.EPSILON) * 100) / 100;
  }
}

export default SpaceAge;