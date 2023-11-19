function FlipACoin() {
  document.getElementById("heads").style.transform = "rotateY(0deg)";
  document.getElementById("tails").style.transform = "rotateY(0deg)";
  document.getElementById("coin").style.transform = "rotate(0deg)";
  document.getElementById("coin").style.top = "120px";

  document.getElementById("heads").style.transitionDuration = "0s";
  document.getElementById("tails").style.transitionDuration = "0s";
  document.getElementById("coin").style.transitionDuration = "0s";
  document.getElementById("result").style.transitionDelay = "0s";
  document.getElementById("result").style.visibility = "hidden";

  setTimeout(function () {
    document.getElementById("heads").style.transitionDuration = "5s";
    document.getElementById("tails").style.transitionDuration = "5s";
    document.getElementById("coin").style.transitionDuration = "5s";
    document.getElementById("result").style.transitionDelay = "5s";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("coin").style.top = "290px";
  }, 10);

  setTimeout(function () {
    var x = Math.random();
    console.log(x);
    if (x <= 0.5) {
      document.getElementById("heads").style.transform = "rotateY(1440deg)";
      document.getElementById("tails").style.transform = "rotateY(1440deg)";
      document.getElementById("coin").style.transform = "rotate(1440deg)";
      ("rotate(1440deg)");
      document.getElementById("result").innerHTML = "Heads";
    } else {
      document.getElementById("heads").style.transform = "rotateY(1620deg)";
      document.getElementById("tails").style.transform = "rotateY(1620deg)";
      document.getElementById("coin").style.transform = "rotate(1620deg)";
      ("rotate(1620deg)");
      document.getElementById("result").innerHTML = "Tails";
    }
  }, 10);
}
