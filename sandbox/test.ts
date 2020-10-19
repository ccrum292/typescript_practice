// class ResistorColor {
//   private colors: string[];
//   private colorSequence: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

//   constructor(colors: string[]) {
//     this.colors = colors;
//     this.colorSequence = this.colorSequence;
//   }

//   value = () => {
//     try {
//       if (this.colors.length < 2) {
//         console.log(`hit`)
//         throw `At least two colors need to be present`
//       }
//       const arrayOfFirstTwoColorValues: number[] = []
//       for (let i = 0; i < 2; i++) {
//         arrayOfFirstTwoColorValues.push(this.colorSequence.indexOf(this.colors[i]));
//       }

//       return parseInt(arrayOfFirstTwoColorValues.join(""));

//     }
//     catch (e) {
//       return e
//     }
//   };
// }

// const resistorColor = new ResistorColor([`orange`])

// console.log(resistorColor.value())


class Matrix {

  public fullGivenString: string;
  public columns;
  public rows;

  formColumns = (givenString: string) => {
    const rowsArray = givenString.split("\n")
      .map(val => val.split("")
        .filter(character => character !== ` `));

    const columnsArray = []
    for (let i = 0; i < rowsArray[0].length; i++) {
      let eachColumn = rowsArray.map((characterArray) => {
        return characterArray[i]
      });

      columnsArray.push(eachColumn)
    }

    return columnsArray;
  }

  formRows = (givenString: string) => {
    return givenString.split("\n")
      .map(val => val.split("")
        .filter(character => character !== ` `))
  }

  constructor(givenString: string) {
    this.fullGivenString = givenString;
    this.columns = this.formColumns(givenString);
    this.rows = this.formRows(givenString);
  }
}

const test1 = new Matrix("1 2\n3 4\n 5 6");
console.log("test1 console.log ", test1);