const removeLineEndings = (jsonAsString: string) => jsonAsString
  .replace(/(\r\n|\n|\r)/gm,'');

export default removeLineEndings;