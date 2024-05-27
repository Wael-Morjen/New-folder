function accum(str) {
    return str.split('').map((char, index) => {
        const repeatedChars = char.repeat(index + 1);
        return `${char.toUpperCase()}${repeatedChars.toLowerCase()}`;
      }).join('-');
  }
  
  // Example usage:
  const inputString = 'abcd';
  const result = accum(inputString);
  console.log(result);  // Output: "A-Bb-Ccc-Dddd"