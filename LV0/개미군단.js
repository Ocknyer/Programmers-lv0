function solution(hp) {
    const general = ~~(hp / 5);
    const soldier = ~~((hp - general * 5) / 3);
    const worker = hp - general * 5 - soldier * 3;
    return general + soldier + worker;
}