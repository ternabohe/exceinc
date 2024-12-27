function rgb(start, end) {
  let startR = Math.floor(start[0]);
  let startG = Math.floor(start[1]);
  let startB = Math.floor(start[2]);

  let endR = Math.floor(end[0]);
  let endG = Math.floor(end[1]);
  let endB = Math.floor(end[2]);

  let stepR = (endR - startR) / 255;
  let stepG = (endG - startG) / 255;
  let stepB = (endB - startB) / 255;

  let result = [];
  for (let i = 0; i <= 255; i++) {
    let r = Math.floor(startR + stepR * i);
    let g = Math.floor(startG + stepG * i);
    let b = Math.floor(startB + stepB * i);
    result.push(`rgb(${r}, ${g}, ${b})`);
  }
  return result.join(', ');
}
