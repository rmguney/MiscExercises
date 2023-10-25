window.onload = function () {
  let i, j, tx, html, node;

  nodes = document.querySelectorAll(".wobble");
  for (j = 0; j < nodes.length; j++) {
    node = nodes[j];
    tx = node.innerHTML;
    html = "";
    for (i = 0; i < tx.length; i++) {
      html += "<span>" + tx.charAt(i) + "</span>";
    }
    node.innerHTML = html;
  }
}
