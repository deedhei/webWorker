const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");
console.log("[Log] window.Worker-->", window.Worker);
if (window.Worker) {
  let worker = new Worker("work.js");
  first.onchange = function (e) {
    worker.postMessage([first.value, second.value]); // work.js文件用onmessage来接收线程发过去的事件
    console.log("first", e);
  };
  second.onchange = function (e) {
    worker.postMessage([first.value, second.value]);
    console.log("second", e);
  };
  worker.onmessage = function (e) {
    result.textContent = e.data;
  };
}
