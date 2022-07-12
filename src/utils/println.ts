const println = (lines: string[]) => {
  const main = document.getElementById("main")! as HTMLElement;

  for (const line of lines) {
    const p = document.createElement("p");
    p.innerText = line;

    main.append(p);

    // Scroll page to the bottom
    window.scrollBy(0, 100);
  }

  const br = document.createElement("br");
  br.style.marginBottom = "16px";
  main.append(br);
};

export default println;
