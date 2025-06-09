// Odota että koko HTML on ladattu ennen kuin JS alkaa toimia
document.addEventListener("DOMContentLoaded, () => {
      // Etsi postauslistalle tarkoitettu elementti
      const postausLista = document.getElementById("postauslista");

      //Luo linkki postaukseen
      const link = document.createElementById("postauslista");
      link.href = "#"; //estää oletusnavigoinnin
      link.textContent = "Oppiminen alkaa";
      link.addEventListener("click", (event) => {
          event.prevent.Default(); //estä sivun uudelleenlataus
          // lataa sisältö tiedostosta
          fetch("1")
            .then(response => {
              if (!response.ok) {
                throw new Error("Tapahtui virhe");
              return response.text();
            })
            .then(html => {
              document.getElementById("sisalto").innerHTML = html;
            })
            .catch(error => {
              document.getElementById("sisalto").innerHTML = <p>Virhe: ${error.message}</p>;
            });
      });
      postList.appendChild(link);
});
