function solution(age) {
    const ageArr = String(age).split('')
    let answer = '';
    
    for (let i in ageArr) {
        answer += String.fromCharCode(parseInt(ageArr[i]) + 97); // js 아스키코드에서 97 = a 98 = b ...
    }
    return answer;
}

function solution2(age) {
    return [...('' + age)].map(item => String.fromCharCode('a'.charCodeAt(0) + +item)).join('');
}
  
// 'abc'.charCodeAt(0) 에서 0은 아스키코드로 가져오고 싶은 해당 문자열의 index 값을 나타낸다.


// map을 활용한 방법
function solution3(age) {
    const char = 'abcdefghij'
    return Array.from(age.toString()).map(item => char[+item]).join('');
}

// forEach를 활용한 방법
function solution4(age) {
    let answer = '';
    const alienAge =  'abcdefghij'.split('');

    age.toString().split('').forEach(item => {
        answer += alienAge[item];
    });

    return answer;
}