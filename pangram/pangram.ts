class Pangram {
  private alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  public pangram: string;
  
  constructor(pangram: string){
    this.pangram = pangram
  }

  isPangram = (): Boolean => {
    const arrayOfCurrentPangram: string[] = []
    this.pangram.toLowerCase().split("").forEach(letter => {
      if(this.alphabet.indexOf(letter) === -1) return;
      if(arrayOfCurrentPangram.indexOf(letter) === -1) arrayOfCurrentPangram.push(letter);
    });

    if(arrayOfCurrentPangram.length === 26) return true;
    return false;
  }

}

export default Pangram;