console.log("Script loaded");

const btn = document.querySelector("#btnLoad");
const dinoWrapper = document.querySelector("#dinoWrapper");

const getDinoName = async () => {
  try {
    const res = await fetch("/dinoname");
    const data = await res.json();
    let dinoName = data[0].join(" ");

    dinoNameParagragh = document.createElement("p");
    dinoNameParagragh.setAttribute("id", "dinoName");

    dinoNameParagragh.innerText = dinoName;
    dinoWrapper.append(dinoNameParagragh);
  } catch (error) {
    const p = document.createElement("p");
    p.innerText = "There was an error getting dinosaur Name";
    p.setAttribute("id", "dinoName");

    return dinoWrapper.append(p);
  }
};

const getDinoImage = async () => {
  try {
    const res = await fetch("/dinoimage");
    const data = await res.json();
    const rand = Math.floor(Math.random() * data.value.length);
    let dinoUrl = data.value[rand].thumbnailUrl;
    let dinoAlt = data.value[rand].name;

    let img = document.createElement("img");

    img.setAttribute("src", dinoUrl);
    img.setAttribute("id", "dinoImage");
    img.setAttribute("alt", dinoAlt);
    dinoWrapper.append(img);
  } catch (error) {
    const p = document.createElement("p");
    p.setAttribute("id", "dinoImage");
    p.innerText = "There was an error getting dinosaur image";
    return dinoWrapper.append(p);
  }
};

btn.addEventListener("click", () => {
  if (document.querySelector("#dinoName")) {
    document.querySelector("#dinoName").remove();
  }

  if (document.querySelector("#dinoImage")) {
    document.querySelector("#dinoImage").remove();
  }

  getDinoName();
  getDinoImage();
});
