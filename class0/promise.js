getUrl()
.then((url) => {
  readFile(url);
})
.catch((err) => {

});

Promise.all([...promises])
.then();
