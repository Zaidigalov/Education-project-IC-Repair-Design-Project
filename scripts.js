const imageBox = document.querySelector(".projects__gallery__image_box"),
  buttonLeft = document.querySelector(".spinner__button_desktop_left"),
  buttonRight = document.querySelector(".spinner__button_desktop_right"),
  spinnerPoint = document.querySelectorAll(".spinner__point"),
  spinnerTitle = document.querySelectorAll(".gallery__button"),
  discription = document.querySelectorAll(".projects__description__flat"),
  characteristics = document.querySelectorAll(".projects__description__list");
let pointIndex = 0;
let position = 0;

function switchRight() {
  position += 679;
  pointIndex++;
  if (position > (spinnerPoint.length - 1) * 679) {
    position = 0;
    pointIndex = 0;
  }
  imageBox.style.left = -position + "px";
  thisSlide(pointIndex);
}

function switchLeft() {
  position -= 679;
  pointIndex--;
  if (position < 0) {
    position = (spinnerPoint.length - 1) * 679;
    pointIndex = spinnerPoint.length - 1;
  }
  imageBox.style.left = -position + "px";

  thisSlide(pointIndex);
}

function thisSlide(index) {
  for (let spinner__point of spinnerPoint) {
    spinner__point.classList.remove("spinner-active");
  }
  spinnerPoint[index].classList.add("spinner-active");

  for (let gallery__button of spinnerTitle) {
    gallery__button.classList.remove("gallery-active");
  }
  spinnerTitle[index].classList.add("gallery-active");

  for (let projects__description__flat of discription) {
    projects__description__flat.classList.remove("visible");
  }
  discription[index].classList.add("visible");

  for (let projects__description__list of characteristics) {
    projects__description__list.classList.remove("projects__description__list_visible");
  }
  characteristics[index].classList.add("projects__description__list_visible");
}

buttonRight.addEventListener("click", switchRight);
buttonLeft.addEventListener("click", switchLeft);

spinnerTitle.forEach((gallery__button, index) => {
  gallery__button.addEventListener("click", () => {
    position = 679 * index;
    imageBox.style.left = -position + "px";
    pointIndex = index;

    thisSlide(pointIndex);
  });
});

spinnerPoint.forEach((spinner__point, index) => {
  spinner__point.addEventListener("click", () => {
    position = 679 * index;
    imageBox.style.left = -position + "px";
    pointIndex = index;

    thisSlide(pointIndex);
  });
});
