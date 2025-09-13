function translate(text, targetLang) {
  console.log(`Translating "${text}" to ${targetLang}`);
  return `${text} (translated to ${targetLang})`;
}
module.exports = { translate };
