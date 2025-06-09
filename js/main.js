// Odota että koko HTML on ladattu ennen kuin JS alkaa toimia
document.addEventListener("DOMContentLoaded", () => {
  // Etsi postauslistalle tarkoitettu elementti
  const postausLista = document.getElementById("postauslista");

  // Luo linkki postaukseen
  const link = document.createElement("a"); // korjattu elementin tyyppi
  link.href = "#"; // estää oletusnavigoinnin
  link.textContent = "Oppiminen aloitettu";

  link.addEventListener("click", (event) => {
    event.preventDefault(); // estä sivun uudelleenlataus

    // lataa sisältö tiedostosta
    fetch("blogipostaus/1.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Tapahtui virhe");
        }
        return response.text();
      })
      .then(html => {
        document.getElementById("sisalto").innerHTML = html;
      })
      .catch(error => {
        document.getElementById("sisalto").innerHTML = `<p>Virhe: ${error.message}</p>`;
      });
  });

  postausLista.textContent = ""; // tyhjennetään "Ladataan..."
  postausLista.appendChild(link);
});
