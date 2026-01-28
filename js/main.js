//lataa koko sivun ensin
document.addEventListener("DOMContentLoaded", () => {
  // luo postausListan ja yhdistää sen oikeaan elementtiin sivulla
  const postausLista = document.getElementById("postauslista");
  postausLista.textContent = ""; // tyhjennä "Ladataan..."

  const postauksia = 3; // montako postausta on olemassa
  //hakee kaikki postaukset listaan
  for (let i = 1; i <= postauksia; i++) {
    fetch(`blogipostaus/${i}.html`)
      .then(response => {
        // jos ei onnistu niin virheviesti
        if (!response.ok) throw new Error("Ei ladattu: " + i);
        return response.text();
      })
      .then(html => {
        // lukee blogipostauksen otsikon 
        const otsikko = html.match(/<h1>(.*?)<\/h1>/i)?.[1] || `Postaus ${i}`;
       // luo linkin, lisää tekstiksi otsikon
        const linkki = document.createElement("a");
        linkki.href = "#"; //vierittää sivun ylälaitaan
        linkki.textContent = otsikko;
        // lisää toiminnon kun linkkiä klikkaa=hakee sisällön
        linkki.addEventListener("click", (event) => {
          event.preventDefault(); //tekee mitä?
          document.getElementById("sisalto").innerHTML = html;
        });
        //liittää postauslistaan linkin ja välilyönnin
        postausLista.appendChild(linkki);
        postausLista.appendChild(document.createElement("br"));
      })
      .catch(error => { //error jos tapahtuu virhe
        console.warn(`Postausta ${i} ei löytynyt`, error);
      });
  }
});
