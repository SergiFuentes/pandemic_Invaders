export { audioOnExtraLive, audioOnGameOver, audioOnHitInvaderProjectile, audioOnHitInvaders, audioOnHitShip, audioOnPlay, audioOnShoot, audioOnInvaderShoot };
  
window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",audioOnPlay);
	document.getElementById("stop").addEventListener("click",audioOnStop);			
} );

function audioOnPlay ()
{
  let sound = document.createElement("iframe");
	sound.setAttribute("src","assets/audio/Direct to your brain.wav");
	document.body.appendChild(sound);
	document.getElementById("play").removeEventListener("click",audioOnPlay);
}

function audioOnStop(){
	let iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",audioOnPlay);
	}
}

function audioOnHitInvaders ()
{
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", "assets/audio/pop.mp3")
  audioTag.play()
}

function audioOnHitShip() {
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", "assets/audio/shipExplosion.mp3")
  audioTag.play()
}

function audioOnShoot() {
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", "assets/audio/laser.mp3")
  audioTag.play()
}

const soundArray = [
  "assets/audio/sneeze.mp3",
  "assets/audio/sneeze1.mp3",
  "assets/audio/sneeze2.mp3",
  "assets/audio/sneeze3.mp3",
  "assets/audio/cough.mp3",
];

function audioOnInvaderShoot() {
  let rand = Math.floor(Math.random() * soundArray.length);
  let sound = soundArray[rand];
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", sound)
  audioTag.play()
}

function audioOnExtraLive() {
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", "assets/audio/extraLive.mp3")
  audioTag.play()
}

function audioOnGameOver() {
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", "assets/audio/gameOver.wav")
  audioTag.play()
}

function audioOnHitInvaderProjectile() {
  let audioTag = document.createElement("audio")
  audioTag.setAttribute("src", "assets/audio/pop1.mp3")
  audioTag.play()
}