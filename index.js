class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^-A-Za-z0-9 ']+/g, '');
  }

  static titleize(str) {
    const unchanged = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const strArray = str.split(" ");
    const newArray = strArray.map(word => {
      if (unchanged.find(w => w === word)) {
        return word;
      } else {
        return Formatter.capitalize(word);
      }
    })
    newArray[0] = Formatter.capitalize(newArray[0]);
    return newArray.join(" ");
  }
}