export { reTry };

const buttonAgain = document.querySelector( "#buttonAgain" );

function reTry() {
  buttonAgain.addEventListener(
    "click",
    function restartGame() {
      location.assign("http://127.0.0.1:5500/public/index.html");
    },
    false
  );

  buttonAgain.addEventListener(
    "mouseover",
    function () {
      this.style.color = "red";
    },
    false
  );

  buttonAgain.addEventListener(
    "mouseout",
    function () {
      this.style.color = "yellow";
    },
    false
  );
}