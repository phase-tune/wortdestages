function showWordOfTheDay() {
    fetch('words.json') // Stelle sicher, dass diese JSON-Datei im gleichen Verzeichnis liegt
      .then(response => response.json())
      .then(data => {
        // 1. Ermitteln des heutigen Tages im Jahr (1 bis 365)
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0); // Anfang des Jahres
        const diff = now - start;
        const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) - 3; // Berechnet den Tag im Jahr
  
        // 2. Bestimmen des Index für das Wort des Tages
        const wordOfTheDay = data[dayOfYear % data.length]; // Modulo, um auf die 365 Wörter zuzugreifen
  
        // 3. Anpassen der HTML-Inhalte
        document.getElementById("wort").textContent = wordOfTheDay.wort;
        document.getElementById("wortartgeschlecht").textContent = wordOfTheDay.wortartgeschlecht;
        document.getElementById("lautschrift").textContent = wordOfTheDay.lautschrift;
        document.getElementById("definition").textContent = wordOfTheDay.definition;
        document.getElementById("beispiel").textContent = wordOfTheDay.beispiel || ''; // Fallback für fehlenden Beispielsatz
      })
      .catch(error => console.error("Fehler beim Laden der Daten:", error));
  }
  
  // Seite aufrufen und das Wort des Tages laden
  window.onload = showWordOfTheDay;