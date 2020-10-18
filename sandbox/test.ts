class ResistorColor {
  private colors: string[];
  private colorSequence: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

  constructor(colors: string[]) {
    this.colors = colors;
    this.colorSequence = this.colorSequence;
  }

  value = () => {
    try {
      if (this.colors.length < 2) {
        console.log(`hit`)
        throw `At least two colors need to be present`
      }
      const arrayOfFirstTwoColorValues: number[] = []
      for (let i = 0; i < 2; i++) {
        arrayOfFirstTwoColorValues.push(this.colorSequence.indexOf(this.colors[i]));
      }

      return parseInt(arrayOfFirstTwoColorValues.join(""));

    }
    catch (e) {
      return e
    }
  };
}

const resistorColor = new ResistorColor([`orange`])

console.log(resistorColor.value())