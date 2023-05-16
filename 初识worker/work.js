// onmessage = function (e) {
//   console.log("Worker: Message received from main script", e);
//   let data = e.data;
//   let result = Number(data[0]) + Number(data[1]);
//   if (isNaN(result)) {
//     this.postMessage("is not number");
//   } else {
//     this.postMessage(result);
//   }
// };

self.addEventListener("message", function (e) {
  console.log("Worker: Message received from main script", e);
  let data = e.data;
  let result = Number(data[0]) + Number(data[1]);
  if (isNaN(result)) {
    this.postMessage("is not number");
  } else {
    this.postMessage(result);
  }
});
