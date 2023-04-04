const checkExtantion = filename => {
  const EXTENSIONS = ['txt', 'json', 'xml', 'js', 'html', 'css'];

  const index = filename.lastIndexOf('.');
  const slicedExts = filename.slice(index + 1);

  console.log(slicedExts);

  return {
    extantion: slicedExts,
    permission: EXTENSIONS.includes(slicedExts),
  };
};
module.exports = checkExtantion;

// node index --action create --filename file.json --content {"name": "vasyl"}
