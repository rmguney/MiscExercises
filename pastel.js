window.onload = function () {
  let i, j, tx, html, node;

  nodes = document.querySelectorAll(".pastel");
  for (j = 0; j < nodes.length; j++) {
    node = nodes[j];
    tx = node.innerHTML;
    html = "";
    for (i = 0; i < tx.length; i++) {
      html += "<span>" + tx.charAt(i) + "</span>";
    }
    node.innerHTML = html;

    const pastel = ['#FAC8CD', '#B0E0E6', '#B4EEB4', '#F3E5AB', '#D8BFD8', '#FFDAB9'];
    const spans = node.querySelectorAll("span");
    for (let k = 0; k < spans.length; k++) {
      const span = spans[k];
      span.addEventListener("mouseover", function () {
        const randomColor = pastel[Math.floor(Math.random() * pastel.length)];
        span.style.color = randomColor;
      });
      span.addEventListener("mouseout", function () {
        span.style.color = "";
      });
    }
  }
};