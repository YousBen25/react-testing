export default function capitalize(word) {
  if (!word) { // this guard clause handles null and empty string
    return word;
  }
  return `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`;
}
