class TwoFer {
  public static twoFer(X:string = `No Name Given`): string {
    // Your code here
    if(X === `No Name Given`){
      return `One for you, one for me.`
    }

    return `One for ${X}, one for me.`
  }
}

export default TwoFer
