const checkExtantion = filename => {
  const EXTENTIONs = ['txt', 'json', 'xml', 'js', 'html', 'css'];

  const index = filename.lastIndexOf('.');
  const slicedExts = filename.slice(index + 1);

  return {
    filename: slicedExts,
    permission: EXTENTIONS.includes(slicedExts),
  };
};

checkExtantion('file.js');
