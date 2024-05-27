function maskify(inputString) {

    if (inputString.length <= 4) {
      return inputString;
    }
  
    const lastFourCharacters = inputString.slice(-4);
  
    const maskedString = '#'.repeat(inputString.length - 4) + lastFourCharacters;
  
    return maskedString;
  }
  
  const originalString = "123456789";
  const maskedResult = maskify(originalString);
  console.log(maskedResult); 
  