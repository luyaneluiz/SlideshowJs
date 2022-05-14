"use strict";

const images = [
  { id: "1", url: "./img/Lua.jpg" },
  { id: "2", url: "./img/Venus.jpg" },
  { id: "3", url: "./img/Jupiter.jpg" },
  { id: "4", url: "./img/Marte.jpg" },
  { id: "5", url: "./img/Netuno.jpg" },
  { id: "6", url: "./img/Urano.jpg" },
  { id: "7", url: "./img/Saturno.jpg" },
  { id: "8", url: "./img/Terra.jpg" },
];

const container = document.querySelector(".container");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
        <div class='img'>
            <img src='${image.url}'>
        </div>`;
  });
};

loadImages(images, container);

let img = document.querySelectorAll(".img");

const prev = () => {
  const lastImg = img[img.length - 1];
  container.insertBefore(lastImg, img[0]);
  img = document.querySelectorAll(".img");
};

const next = () => {
  container.appendChild(img[0]);
  img = document.querySelectorAll(".img");
};

document.querySelector("#prev").addEventListener("click", prev);
document.querySelector("#next").addEventListener("click", next);
