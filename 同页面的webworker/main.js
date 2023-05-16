var blob = new Blob([document.querySelector("#worker").textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);

worker.onmessage = function (e) {
  // e.data === 'some message'
  console.log(e);
};
