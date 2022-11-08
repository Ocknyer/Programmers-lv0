function solution(my_string) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    let answer = ''
    
    for(let i in my_string) {        
        lower.includes(my_string[i]) ? answer += my_string[i].toUpperCase() : answer += my_string[i].toLowerCase();
    }
    return answer
}

function solution2(my_string) {
    return my_string.split('').map((item) => {
        return item[item.charCodeAt() < 91 ? 'toLowerCase' : 'toUpperCase']()
    }).join('')
}