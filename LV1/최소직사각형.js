function solution(sizes) {
    const width = [];
    const height = [];
    
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
        width.push(sizes[i][0]);
        width.sort((a, b) => a - b);
        
        height.push(sizes[i][1]);
        height.sort((a, b) => a - b);
    }
    return width.pop() * height.pop()
}

function solution(sizes) {
    const rotate = sizes.map(([w, h]) => (w < h) ? [h, w] : [w, h]);
    
    let maxWidth = 0;
    let maxHeight = 0;
    
    rotate.forEach(([w, h]) => {
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    });
    return maxWidth * maxHeight;
}