const fs = require("fs").promises;

fs.readdir(__dirname)
  .then((files) => {
    const promises = files.map(async (filename) => {
      const stats = await fs.stat(filename);

      return {
        Name: filename,
        Size: stats.size,
        Date: stats.mtime,
      };
    });

   return Promise.all(promises)
  })
  .then(result=> console.log(result))
  .catch((err) => {
    console.log(err);
  });
