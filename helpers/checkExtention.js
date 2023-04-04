const checkExtantion = (filename) => { 
    const EXTENTIONs = ['txt', 'json', 'xml', 'js', 'html', 'css'];
    
    const index = filename.lastIndexOf(".");
    const slicedExts = filename.slice(index + 1);


    if (EXTENTIONS.includes(slicedExts)) { 
        return { filename: slicedExts, permission: true };
    }
    
}
checkExtantion("file.js")