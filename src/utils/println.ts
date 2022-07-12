const println = (lines: string[]) => {
  const main = document.getElementById("main")!;
  const span = document.createElement("span");

  for (const line of lines) {
    const p = document.createElement("p");
    p.innerText = line;

    span.append(p);
  }

  const br = document.createElement("br");
  br.style.marginBottom = "16px";
  span.append(br);

  main.append(span);

  // Scroll page to the bottom
  window.scrollBy(0, document.body.scrollHeight);
};

export default println;
