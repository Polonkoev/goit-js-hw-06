const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// for (let image of images) {

//   const galleryEl = document.querySelector(".gallery");
//   const listItem = document.createElement("li");
//   listItem.classList = "item-position";
//   const imageItem = `<img src="${image.url}" width = '400' height = '300', alt="${image.alt}">`;
//   listItem.insertAdjacentHTML("afterbegin", imageItem);
//   galleryEl.append(listItem);
// }

// const galleryEl = document.querySelector(".gallery");
// const imagesEl = images.map(({ url, alt }) => {
//   const listItem = document.createElement("li");
//   // listItem.classList = "item-position";
//   const imageItem = `<img src="${url}" width = '400' height = '300', alt="${alt}">`;
//   listItem.insertAdjacentHTML("afterbegin", imageItem);
//   galleryEl.append(listItem);
// });

const listUl = document.querySelector("ul");

const imgEl = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" width='400' heigth='300', alt="${alt}"></li>`
  )
  .join("");
console.log(imgEl);
listUl.insertAdjacentHTML("afterbegin", imgEl);
