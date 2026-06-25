function showContent(type) {
  const box = document.getElementById("contentBox");
  if (type === 'html') {
    box.innerHTML = "<p>This is <b>HTML</b> content. It is used to structure webpages.</p>";
  } else if (type === 'css') {
    box.innerHTML = "<p>This is <b>CSS</b> content. It is used to style webpages.</p>";
  } else if (type === 'js') {
    box.innerHTML = "<p>This is <b>JavaScript</b> content. It is used to add interactivity.</p>";
  }
}
