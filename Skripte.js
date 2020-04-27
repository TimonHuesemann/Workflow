function CreateTableFromJSON(ReqData) {

  fetch(ReqData).then(response => {
    return response.json();
  }).then(data => {
    // Die Daten für den Vertretungsplan
    var VertretungsDaten = data;
    console.log(VertretungsDaten)


    // EXTRACT VALUE FOR HTML HEADER.
    // ('Stunde', 'Lehrer', 'Fach' und 'Ereignis')
    var col = [];
    for (var i = 0; i < VertretungsDaten.length; i++) {
        for (var key in VertretungsDaten[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Erstellt dynamische Tabelle
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // Fügt den Inhalt in die Zeilen ein
    for (var i = 0; i < VertretungsDaten.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = VertretungsDaten[i][col[j]];
        }
    }

    // Die Tabelle wird in den Container 'showData' eingefügt
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

  }

)
}


function empty(){
document.getElementById("showData").innerHTML = "";
}
