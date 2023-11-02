let arr = [];
for (let i = 1; i <= 24; i++) {
  arr.push({ id: i, name: `${i}` });
}

let lastIndexDisplayed = 0;

function generateItemHTML(item) {
  const index = arr.indexOf(item) + 1;
  const imagePath = `assets/${index}`;
  let imageHTML;
  const supportedExtensions = ["png", "jpg", "svg", "gif"];
  for (let i = 0; i < supportedExtensions.length; i++) {
    const extension = supportedExtensions[i];
    const pathWithExtension = `${imagePath}.${extension}`;
    if (fileExists(pathWithExtension)) {
      switch (extension) {
        case "png":
        case "jpg":
        case "gif":
          imageHTML = `<img src="${pathWithExtension}">`;
          break;
        case "svg":
          imageHTML = `<object type="image/svg+xml" data="${pathWithExtension}"></object>`;
          break;
      }
      break;
    }
  }
  if (!imageHTML) {
    imageHTML = `<img src="https://yt3.ggpht.com/ytc/AKedOLTeCD_ahdi8EB1JZ3ARgH9LyuVc5L4nypdK4EY9=s900-c-k-c0x00ffffff-no-rj">`;
  }

  return `<div class="rounded overflow-hidden shadow-lg hover:bg-gray-100 p-4">
            ${imageHTML}
          </div>`;
}

function fileExists(path) {
  const http = new XMLHttpRequest();
  http.open("HEAD", path, false);
  http.send();
  return http.status != 404;
}

function generateAllItemsHTML() {
  const itemsPerClick = 12;
  const uniqueItems = arr.slice(lastIndexDisplayed, lastIndexDisplayed + itemsPerClick);
  lastIndexDisplayed += uniqueItems.length;

  let allItemsHTML = "";
  uniqueItems.forEach((item) => {
    allItemsHTML += generateItemHTML(item);
  });

  for (let i = lastIndexDisplayed + 1; i <= lastIndexDisplayed + itemsPerClick; i++) {
    arr.push({ id: i, name: `Image ${i}` });
  }

  return allItemsHTML;
}

function generateAndDisplayFirstItems() {
  lastIndexDisplayed = 0;
  document.getElementById("dynamic").innerHTML = generateAllItemsHTML();
}

generateAndDisplayFirstItems();

const showMoreButton = document.getElementById("show-more-button");
showMoreButton.addEventListener("click", () => {
  document.getElementById("dynamic").innerHTML += generateAllItemsHTML();
});
