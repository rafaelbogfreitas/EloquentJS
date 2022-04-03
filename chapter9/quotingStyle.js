let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(?<=\W|^)'|'(?=\W)/gi, "\""));
// → "I'm the cook," he said, "it's my job."