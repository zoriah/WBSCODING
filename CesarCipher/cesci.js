let eingabe = process.argv[2]
if (eingabe === undefined) {
    console.log("You have to provide the first parameter")
    return
}
eingabe = eingabe.toLowerCase()

// Zu Array umwandeln Zeile 9 u. 10 funzen
eingabeArray = [...eingabe]
// eingabeArray = eingabe.split('')

let schluessel = process.argv[3]
schluessel = parseInt(schluessel)
// console.log("eingabe: " + eingabe + "\n" + "schluessel: " + schluessel)
// console.log("type of schluessel: " + typeof schluessel)
// console.log(schluessel % 26)
// console.log("type of eingabe: " + typeof eingabe)

// Englisches ABC mit Destructor zu Array umgewandelt
// und in variable alphabet überschrieben

const abc = [...'abcdefghijklmnopqrstuvwxyz'];
// console.log(abc);

// Länge des ABCs
const lengthOfAbc = abc.length
const verschiebung = schluessel % lengthOfAbc
// console.log("Länge des ABCs: " + lengthOfAbc)

// verschobenes ABC
const abcShifted = abcAenderung()
// console.log(eingabeArray)


function abcAenderung() {
    let slicedAbc = abc.slice(verschiebung)
    // console.log(slicedAbc, abc)
    let remainingElements = abc.slice(0, verschiebung);
    let abcShift = slicedAbc.concat(remainingElements);

    return abcShift
}

function verschluesselung(msgArray = eingabeArray, verschiebung) {
    const abcShifted = abcAenderung();
    return msgArray
        .map((ch) => {
            const index = abc.indexOf(ch);
            if (index === -1) {
                return ch;
            }
            return abcShifted[index];
        })
        .join('');
}

const encrypted = verschluesselung()

console.log(encrypted)