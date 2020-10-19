class Bob {
  private alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");


  isYelling(textArray: string[]): Boolean {
    let isYellingValue = true;
    let isLetter = false
    textArray.forEach(val => {
      if(val !== val.toUpperCase()) isYellingValue = false;
      if(this.alphabet.indexOf(val) !== -1) isLetter = true;
    })

    if(isYellingValue && isLetter) return true;
    return false;
  }

  hey(text: string): string {
    const textArray = text.trim().split("")
    if(textArray[textArray.length-1] === "?" && this.isYelling(textArray)){
      return `Calm down, I know what I\'m doing!`
    }
    if(this.isYelling(textArray)) return `Whoa, chill out!`;
    if(textArray[textArray.length-1] === "?") return `Sure.`;
    if(textArray.length < 1) return `Fine. Be that way!`
    return `Whatever.`;
  }
}

export default Bob;