function correct(string) {
    let newString = '';
    for (const remove of string) {
      if (remove === '0') {
        newString += 'O'
      } else if (remove === '1') {
        newString += "I"
      } else if (remove === '5') {
        newString += 'S'
      } else {
        newString += remove;
      }
    }
    return newString;
    }