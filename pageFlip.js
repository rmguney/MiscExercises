document.addEventListener("wheel", event => {
  
  const direction = event.deltaY < 0 ? "up" : "down";
  const page1Elements = document.querySelectorAll(".page1");
  const page2Elements = document.querySelectorAll(".page2");

  page1Elements.forEach(page1 => {
  page1.style.opacity = direction === "down" ? "0" : "1";
  });

  page2Elements.forEach(page2 => {
  page2.style.opacity = direction === "down" ? "1" : "0";
  });

  if (direction === "down" < window.innerHeight) {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
  });

  } else if (direction === "up" > 0) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });
  }

});