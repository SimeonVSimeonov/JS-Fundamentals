function figureArea(w, h, W, H) {
    let area1 = W * H;
    let area2 = w * h;
    let area = (area1 + area2) - (Math.min(w, W) * Math.min(h, H));
    return area;

}

console.log(figureArea(2, 4, 5, 3));
console.log(figureArea(13, 2, 5, 8));