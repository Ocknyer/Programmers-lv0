function solution(s) {    
    // let sReg = s.replace(/\s{1,}/gi, ' ').split(' ')
    let arr = [];
    let split = s.split('')
    console.log(split)
    split.forEach(item => {
        for (let i in item) {
            i % 2 ? arr.push(item[i].toLowerCase()) : arr.push(item[i].toUpperCase());
        }
        arr.push(' ')
    })
    return arr.join('').replace(/\s+$/gm,'')
}

console.log(solution(' tRRdfay        helRREDQlo  WORLD     '))

// arr.join('').replace(/^\s+|\s+$/gm,'')

function solution(s) {
    let result = "";
    let num = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === " ") {
            num = 0;
            result += " ";
        } else if (num % 2 === 0) {
            num++;
            result += (s.charAt(i)).toUpperCase();
        } else {
            num++;
            result += (s.charAt(i)).toLowerCase();
        }
    }
    return result
}

function solution(s) {    
    return s.split(' ').map(item => 
        item.split('').map((v, i) => 
            i % 2 === 0 ? item[i].toUpperCase() : item[i].toLowerCase()
        ).join('')
    ).join(' ')
}