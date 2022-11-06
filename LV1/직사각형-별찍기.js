process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const star = '';
    for (let i = 1; i <= b; i ++) {
        for (let j = 1; j <= a; j++) {
            star += '*';
            if (j === a) {
                star += '\n';
            }
        }
    }
    console.log(star);

    // 직사각형이라 repeat를 써서 그냥 풀어도 되는 문제였다..
    // console.log(('*'.repeat(a) + '\n').repeat(b))
});

