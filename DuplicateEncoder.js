const myWord = "lanna";

function duplicateEncode1(word) {
  let finalWord = [];
  let wordBase = word.toLowerCase().split("");
  wordBase.forEach((e, inx) => {
    let bufforElement = [...wordBase];
    bufforElement.splice(inx, 1);
    let check = 1;
    for (let i = 0; i < bufforElement.length; i++) {
      if (bufforElement[i] === e && check) {
        finalWord.push(")");
        check = 0;
      }
    }
    if (check) {
      finalWord.push("(");
    }
  });
  return finalWord.join("");
}

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

function duplicateEncode3(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

function duplicateEncode4(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

function duplicateEncode5(word) {
  var letters = word.toLowerCase().split("");
  return letters
    .map(function(c, i) {
      return letters.some(function(x, j) {
        return x === c && i !== j;
      })
        ? ")"
        : "(";
    })
    .join("");
}

function duplicateEncode6(string) {
  var occurances = string
    .toLowerCase()
    .split("")
    .reduce(function(occ, cha) {
      occ[cha] = (occ[cha] || 0) + 1;
      return occ;
    }, {});
  return string.toLowerCase().replace(/[\S\s]/g, function(cha) {
    return occurances[cha] > 1 ? ")" : "(";
  });
}

function duplicateEncode7(word) {
  return word.toLowerCase().replace(/./g, function(match) {
    return word.toLowerCase().split(match).length > 2 ? ")" : "(";
  });
}

const duplicateEncode8 = w =>
  w.replace(/./g, c => (new RegExp(`([${c}]).*\\1`, "gi").test(w) ? ")" : "("));

const wynik = duplicateEncode8(myWord);
console.log(wynik);
