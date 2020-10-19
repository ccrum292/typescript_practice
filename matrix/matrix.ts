// still not passing two tests

class Matrix {

  public fullGivenString: string;
  public columns: any;
  public rows: any;

  
  formRows = (givenString: string) => {
    return givenString.split("\n")
    .map(val => val.split("").filter(character => character !== ` `).map(value => parseInt(value)))
  }
  
  formColumns = (givenString: string) => {
    const rowsArray = this.formRows(givenString);

    const columnsArray = []
    for (let i = 0; i < rowsArray[0].length; i++) {
      let eachColumn = rowsArray.map((characterArray) => {
        return characterArray[i]
      });

      columnsArray.push(eachColumn)
    }

    return columnsArray;
  }

  constructor(givenString: string) {
    this.fullGivenString = givenString;
    this.columns = this.formColumns(givenString);
    this.rows = this.formRows(givenString);
  }
}

export default Matrix
