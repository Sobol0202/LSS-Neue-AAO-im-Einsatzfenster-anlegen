// ==UserScript==
// @name         LSS Neue AAO im Einsatzfenster
// @namespace    www.leitstellenspiel.de
// @version      1.0
// @description  Fügt einen Button zum erzeugen einer neuen AAO im Einsatzfenster ein.
// @author       MissSobol
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Erstelle den neuen Button
    var newButton = document.createElement("a");
    newButton.setAttribute("class", "btn btn-xs btn-default lightbox-open");
    newButton.setAttribute("href", "/aaos/new");
    newButton.innerHTML = "Neue AAO Anlegen";

    // Finde das Element, bevor dem der neue Button eingefügt werden soll
    var targetElement = document.getElementById("navbar-right-help-button");

    // Füge den neuen Button vor dem Ziel-Element ein
    targetElement.parentNode.insertBefore(newButton, targetElement);

    // Füge einen Eventlistener hinzu, um auf Klicks des neuen Buttons zu reagieren
    newButton.addEventListener("click", function(event) {
        event.preventDefault();
    });
})();
