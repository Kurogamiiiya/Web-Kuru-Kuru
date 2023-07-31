const bmMenu = document.getElementById("bmMenu");
let i = false;
let index = 0;
let indexText = document.getElementById("indexText");
let questText = document.getElementById("questText");

function burgerMenu() {
  if (i) {
    bmMenu.classList.add("slideLeft");
    bmMenu.classList.remove("slideRight");
  } else {
    bmMenu.classList.remove("slideLeft");
    bmMenu.classList.add("slideRight");
  }
  i = !i;
}

const imgContainer = document.getElementById("imgContainer");

let soundList = [
  "aud/Herta/KuruKuru.mp3",
  "aud/Herta/Kururing.mp3",
  "/aud/Kafka/kurukuru.mp3",
  "/aud/Kafka/kururin.mp3",
];

function spawn() {
  index++;
  indexText.textContent = index;
  const img = document.createElement("img");
  img.classList.add("slideRightImg");
  img.src = `img/${char.value}.gif`;
  let i;

  switch (char.value) {
    case "Herta":
      i = 0;
      break;

    case "Kafka":
      i = 2;
      break;
  }

  const sound = document.createElement("audio");
  sound.src = soundList[Math.floor(Math.random() * 2) + i];
  sound.play();

  imgContainer.appendChild(img);
  imgContainer.appendChild(sound);

  setTimeout(() => {
    imgContainer.removeChild(img);
    imgContainer.removeChild(sound);
  }, 1190);

  if (index == 50) {
    charSelect.appendChild(charKafka);
    questText.textContent = "";
    alert("Kafka Unlocked!");
  }
}

const charText = document.getElementById("charText");
const char = document.getElementById("charSelect");
char.value = "Herta";

const charSelect = document.getElementById("charSelect");

const charHerta = document.createElement("option");
charHerta.textContent = "Herta";
charHerta.value = "Herta";

charSelect.appendChild(charHerta);

const charKafka = document.createElement("option");
charKafka.textContent = "Kafka";
charKafka.value = "Kafka";

function changeChar() {
  charText.textContent = char.value;

  console.log(char.value);

  burgerMenu();
}
