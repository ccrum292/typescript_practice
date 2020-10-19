class Transcriptor {
    toRna(dna: string): string {
      if(!dna){
        throw Error(`This function requires one, type string, argument of dna to be passed, thank you.`)
      }

      let numberOfInvalidInput: number = 0; 

      const rna = dna.toUpperCase().split("").map(val => {
        if(val === `G`) return `C`;
        if(val === `C`) return `G`;
        if(val === `T`) return `A`;
        if(val === `A`) return `U`;
        numberOfInvalidInput++;
      }).join("");

      if(numberOfInvalidInput === 0) return rna
      throw Error(`Invalid input DNA.`)
    }
}

export default Transcriptor