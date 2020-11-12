let js = 'javascriptloops'
let hardjs = 'learnjavascriptloopsinhackerrankweekofcode'

function vowelsAndConsonants(s) {
    let vowels = 'aeiou'
    for (let vowel in vowels) {
        for (let letter in s) {
            if (s[letter] === vowels[vowel]) {
                console.log(s[letter]);
                s = s.replace(s[letter], ' ');
            };
        };
    };
    for ( letter in s ) {
        if ( s[letter] !== ' ' ) {
            console.log(s[letter]);
        };
    };
};
vowelsAndConsonants(hardjs);
