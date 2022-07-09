export default function (lines: string[]) {
  const main = document.getElementById("main");

  for (const line of lines) {
    const p = document.createElement("p");
    p.innerText = line;

    main.append(p);

    // Scroll page to the bottom
    window.scrollBy(0, 100);
  }
}
