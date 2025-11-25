const footer = document.querySelector("footer");
const lastSection = document.querySelector("#contact");

window.addEventListener("scroll", () => {
  const rect = lastSection.getBoundingClientRect();
  if(rect.top <= 0) {
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.left = "0";       // importante
    footer.style.width = "100%";   // importante
    footer.style.zIndex = "100";   // opcional, que esté por encima
  } else {
    footer.style.position = "static";
    footer.style.width = "";       // vuelve a su valor original
    footer.style.left = "";        // vuelve a su valor original
  }
});