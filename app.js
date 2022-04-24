const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let time = setInterval(loadPage, 30);

let count = 0;
function loadPage() {
  count++;
  if (count > 99) {
    clearInterval(time);
  }
  console.log(count);

  loading.innerHTML = `${count}%`
  bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
  loading.style.opacity = `${scale(count, 0, 100, 1, 0)}`;

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
}
