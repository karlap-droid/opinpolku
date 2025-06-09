document.addEventListener("DOMContentLoaded", () => {
  const postausLista = document.getElementById("postauslista");
  postausLista.textContent = ""; // tyhjennä "Ladataan..."

  const postauksia = 5; // montako postausta on olemassa

  for (let i = 1; i <= postauksia; i++) {
    fetch(`blogipostaus/${i}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Ei ladattu: " + i);
        return response.text();
      })
      .then(html => {
        const otsikko = html.match(/<h1>(.*?)<\/h1>/i)?.[1] || `Postaus ${i}`;

        const linkki = document.createElement("a");
        linkki.href = "#";
        linkki.textContent = otsikko;
        linkki.addEventListener("click", (event) => {
          event.preventDefault();
          document.getElementById("sisalto").innerHTML = html;
        });

        postausLista.appendChild(linkki);
        postausLista.appendChild(document.createElement("br"));
      })
      .catch(error => {
        console.warn(`Postausta ${i} ei löytynyt`, error);
      });
  }
});
