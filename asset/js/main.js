/*
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla",
se clicchiamo su annulla dobbiamo ripulire il form.*/

function datiBiglietto() {

    var nome_ele = document.querySelector('#NomeUtente').value;
    document.getElementById('NomeBiglietto').innerHTML = nome_ele;

    var cognome_ele = document.querySelector('#CognomeUtente').value;
    document.getElementById('CognomeBiglietto').innerHTML = cognome_ele;

    var km_ele = document.querySelector('#KmUtente').value;
    document.getElementById('KmTratta').innerHTML = km_ele;

    var costo = (km_ele * 0.20).toFixed(2);
    document.getElementById('CostoTratta').innerHTML = '€ ' + costo;

    var eta_ele = document.querySelector('#EtaUtente').value;

    if (eta_ele === 'u18') {
        var scontoU18 = (costo) - ((costo / 10) * 2).toFixed(2);

        document.getElementById('Sconto').innerHTML = 'Hai uno sconto del 20%';
        document.getElementById('totale').innerHTML = '€ ' + scontoU18;

    } else if (eta_ele === 'o65') {
        var scontoO65 = (costo) - ((costo / 10) * 4).toFixed(2);

        document.getElementById('Sconto').innerHTML = 'Hai uno sconto del 40%';
        document.getElementById('totale').innerHTML = '€ ' + scontoO65;

    } else {
        document.getElementById('Sconto').innerHTML = 'Non vengono applicati sconti';
        document.getElementById('totale').innerHTML = '€ ' + costo;
    }


    var carrozza = Math.ceil(Math.random() * 10);
    document.getElementById('carrozza').innerHTML = carrozza;

    var CP = Math.floor(Math.random() * (100000 - 90000 + 1) + 90000);
    document.getElementById('codCP').innerHTML = CP;

    return;
}








