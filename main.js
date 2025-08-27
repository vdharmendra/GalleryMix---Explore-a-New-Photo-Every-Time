// SELECTING ELEMENTS IMAGE DIV
const imageContainerDiv = document.querySelector(".image-container");
// SELECTING LOAD MORE BUTTON
const btnLoadMore = document.querySelector(".load-more-btn");
// ADDING EVENT LISTNER TO LOAD MORE BUTTON
btnLoadMore.addEventListener("click", () => {
  imageNum = 10;
  // CALLING ADDNEW IMAGE FUNCTION
  addNewImages();
});
// DECLARING ADDNEW IMAGE FUNCTION
function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    // APPENDING THE NEW IMAGES
    imageContainerDiv.appendChild(newImgEl);
  }
}