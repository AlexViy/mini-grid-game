window.onload = function () {
  const ctx = document.getElementById('canvas').getContext('2d');
  const lemon = document.getElementById('lemon');
  const clover = document.getElementById('clover');
  const apple = document.getElementById('apple');
  const orange = document.getElementById('orange');
  const plum = document.getElementById('plum');
  const iconSize = 40;
  const interval = iconSize;

  let yCoord = 50;

  for (let i = 0; i < 15; i++) {
    let xCoord = 50;
    for (let j = 0; j < 15; j++) {
      const randomNumb = +(Math.random(4) * 4).toFixed();
      let img;

      switch (randomNumb) {
      case 0:
        img = lemon;
        break;
      case 1:
        img = clover;
        break;
      case 2:
        img = apple;
        break;
      case 3:
        img = orange;
        break;
      default:
        img = plum;
        break;
      }

      ctx.drawImage(img, xCoord, yCoord, iconSize, iconSize);
      xCoord += interval;
    }
    yCoord += interval;
  }
};
