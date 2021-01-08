function makeLpsArray(pattern) {
  if (pattern.length === 0) return [];

  const table = [0];
  let prefixIdx = 0;
  let suffixIdx = 1;

  while (suffixIdx < pattern.length) {
    if (pattern[prefixIdx] === pattern[suffixIdx]) {
      table.push(prefixIdx + 1);

      suffixIdx += 1;
      prefixIdx += 1;
    } else if (prefixIdx === 0) {
      table.push(0);

      suffixIdx += 1;
    } else {
      prefixIdx = table[prefixIdx - 1];
    }
  }

  return table;
}

function kmp(text, pattern) {
  if (pattern.length === 0) return [];

  const lpsArray = makeLpsArray(pattern);
  let textIdx = 0;
  let patternIdx = 0;
  let output = [];

  while (textIdx < text.length) {
    if (text[textIdx] === pattern[patternIdx]) {
      if (patternIdx === pattern.length - 1) {
        output.push(textIdx - pattern.length + 1);
      }

      textIdx += 1;
      patternIdx += 1;
    } else if (patternIdx > 0) {
      patternIdx = lpsArray[patternIdx - 1];
    } else {
      patternIdx = 0;
      textIdx += 1;
    }
  }

  return output;
}

module.exports = { kmp, makeLpsArray };
