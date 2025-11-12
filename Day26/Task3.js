function getData(callback) {
  setTimeout(() => {
    callback(null, "Here is your data!");
  }, 1000);
}
function getDataPromise() {
  return new Promise((resolve, reject) => {
    getData((err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

getDataPromise()
  .then(data => console.log(data))
  .catch(err => console.error(err));


