const pigLatin = (txt) => {
    return txt
        .split(' ')
        .map((word) => {
            const firstVowel = word.match(/[AEIOUaeiou]/);
            const vowelIndex = word.indexOf(firstVowel);

            if (vowelIndex === 0) {
                return word + 'way';
            } else if (vowelIndex === 1) {
                return word.slice(1) + word[0] + 'ay';
            } else if (vowelIndex > 1) {
                return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay';
            }
            return word;
        })
        .join(' ');
};

const eingabe = process.argv.slice(2).join(' ');
const ausgabe = pigLatin(eingabe);
console.log(ausgabe);
