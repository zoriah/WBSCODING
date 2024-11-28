// Regeln:
// Schere schlägt Papier, verliert aber gegen Stein
// Papier schlägt Stein, verliert aber gegen Schere
// Stein schlägt Schere, verliert aber gegen Papier
// Zeigen beide Teilnehmenden das gleiche Symbol, geht die Runde unentschieden aus
const auswahl = ["Schere", "Stein", "Papier"];
let p1

// Computer wählt Symbol aus
let cpu = auswahl[(Math.round(Math.random() * 2))]

let punkte_p1 = 0
let punkte_cpu = 0

console.log('\x1b[36m', '\n\n\n\rWillkommen zum Spiel Schere, Stein, Papier.\n\n', '\x1b[0m');

function gameLoic() {
    // Spieler p1 wählt korrekte Zahl für Symbol aus
    // Entweder p1 wählt zwischen 1 - 3 oder
    // Abbruch
    if (process.argv[2] < 1 || process.argv[2] > 3) {
        console.log('\x1b[31m', '\rAktuelle Prozedur wird beendet.')
        console.log('\x1b[33m', '\rWählen Sie Schere (1), Stein (2) oder Papier (3) aus. Zur Wahl der Schere Bsp. (node app.js 1)\n')
        return
    }

    p1 = auswahl[process.argv[2] - 1]
    // console.log(p1, typeof (p1))
    // console.log(cpu, typeof (cpu))

    //Vergleich für Punktvergabe
    if (p1 == "Schere" && cpu == 'Schere') {
        console.log("Unentschieden. Kein Punkt vergeben.")
    }
    else if (p1 == "Schere" && cpu == "Stein") {
        console.log("Stein schleift Schere")
        console.log("Computer gewinnt 1 Punkt")
        punkte_cpu++
    }
    else if (p1 == "Schere" && cpu == "Papier") {
        console.log("Schere schneidet Papier")
        console.log("Spieler gewinnt 1 Punkt")
        punkte_p1++
    }
    else if (p1 == "Stein" && cpu == 'Schere') {
        console.log("Stein schleift Schere")
        console.log("Spieler gewinnt 1 Punkt")
        punkte_p1++
    }
    else if (p1 == "Stein" && cpu == "Stein") {
        console.log("Unentschieden. Kein Punkt vergeben.")
    }
    else if (p1 == "Stein" && cpu == "Papier") {
        console.log("Papier bedeckt Stein")
        console.log("Computer gewinnt 1 Punkt")
        punkte_cpu++
    }
    else if (p1 == "Papier" && cpu == 'Schere') {
        console.log("Schere schneidet Papier")
        console.log("Computer gewinnt 1 Punkt")
        punkte_cpu++
    }
    else if (p1 == "Papier" && cpu == "Stein") {
        console.log("Papier bedeckt Stein")
        console.log("Spieler gewinnt 1 Punkt")
        punkte_p1++
    }
    else if (p1 == "Papier" && cpu == "Papier") {
        console.log("Unentschieden. Kein Punkt vergeben.")
    }
    else {
        console.log("Kein Vergleich wurde durchgeführt!")
    }
    if (punkte_p1 > punkte_cpu) {
        console.log('\x1b[35m', `\n\n\r${punkte_p1} : ${punkte_cpu}\n\nSpieler hat gewonnen.`);
    } else
        console.log('\x1b[35m', `\n\n\r${punkte_p1} : ${punkte_cpu}\n\nComputer hat gewonnen.`);
}

// switch (p1) {
//     case (p1 == "Schere" && cpu == 'Schere'):
//         console.log("Unentschieden. Kein Punkt vergeben.")
//         break;
//     case (p1 == "Schere" && cpu == "Stein"):
//         console.log("Stein schleift Schere")
//         console.log("Computer gewinnt 1 Punkt")
//         punkte_cpu++
//         break;
//     case (p1 == "Schere" && cpu == "Papier"):
//         console.log("Schere schneidet Papier")
//         console.log("Spieler gewinnt 1 Punkt")
//         punkte_p1++
//         break;
//     case (p1 == "Stein" && cpu == 'Schere'):
//         console.log("Stein schleift Schere")
//         console.log("Spieler gewinnt 1 Punkt")
//         punkte_p1++
//         break;
//     case (p1 == "Stein" && cpu == "Stein"):
//         console.log("Unentschieden. Kein Punkt vergeben.")
//         break;
//     case (p1 == "Stein" && cpu == "Papier"):
//         console.log("Papier bedeckt Stein")
//         console.log("Computer gewinnt 1 Punkt")
//         punkte_cpu++
//         break;
//     case (p1 == "Papier" && cpu == 'Schere'):
//         console.log("Schere schneidet Papier")
//         console.log("Computer gewinnt 1 Punkt")
//         punkte_cpu++
//         break;
//     case (p1 == "Papier" && cpu == "Stein"):
//         console.log("Papier bedeckt Stein")
//         console.log("Spieler gewinnt 1 Punkt")
//         punkte_p1++
//         break;
//     case (p1 == "Papier" && cpu == "Papier"):
//         console.log("Unentschieden. Kein Punkt vergeben.")
//         break;
//     default:
//         console.log("Kein Vergleich wurde durchgeführt!")
//         break;
// }
// if (punkte_p1 > punkte_cpu) {
//     console.log('\x1b[35m', `\n\n\r${punkte_p1} : ${punkte_cpu}\n\nSpieler hat gewonnen.`);
// } else
//     console.log('\x1b[35m', `\n\n\r${punkte_p1} : ${punkte_cpu}\n\nComputer hat gewonnen.`);
// }

// ---app ausführen---
gameLoic()
