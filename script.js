var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    //reseting the arrays
    duplicateWords = [];
    newWords = [];
    data = {};
    showWords(document.querySelector('#user-text').value);
});

let duplicateWords = [];
let newWords = [];
let data = {};

function showWords(userWords) {
    let words = userWords.split(" ");
    
    for (let i in words) {
        let word = words[i];
        if(!data[word]){
            data[word] = 1;
        }
        else{
            data[word] ++;
            if(!duplicateWords.includes(word)){
                duplicateWords.push(word);
            }
        }
    }
    let wordAndCount = duplicateWords.map((w, i) => [w, data[w]])
    let output = document.getElementById('fillBody');
    output.innerHTML = "";

    wordAndCount.sort(function(prev, next){
        return next[1] - prev[1];
    });

    for(let w in wordAndCount) {
        let word = wordAndCount[w];
        let k = word[0];
        let v = word[1];

        let row = document.createElement('tr');
        //display the words
        let wordtd = document.createElement('td');
        wordtd.innerHTML = k;
        row.appendChild(wordtd);
        //display the count
        let counttd = document.createElement('td');
        counttd.innerHTML = v;
        row.appendChild(counttd);

        output.appendChild(row);
    }
}
