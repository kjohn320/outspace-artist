export const getWindowWidth = () => {
  let drawing = document.getElementById('drawing-container');
  if (drawing){
    return drawing.clientWidth;
  }else{
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth,
    );
  }
  }
  // MIT http://rem.mit-license.org
export const trimCanvas = (c) =>{
  var ctx = c.getContext('2d'),
      copy = document.createElement('canvas').getContext('2d'),
      pixels = ctx.getImageData(0, 0, c.width, c.height),
      l = pixels.data.length,
      i,
      bound = {
          top: null,
          left: null,
          right: null,
          bottom: null
      },
      x, y;
  
  // Iterate over every pixel to find the highest
  // and where it ends on every axis ()
  for (i = 0; i < l; i += 4) {
      if (pixels.data[i + 3] !== 0) {
          x = (i / 4) % c.width;
          y = ~~((i / 4) / c.width);

          if (bound.top === null) {
              bound.top = y;
          }

          if (bound.left === null) {
              bound.left = x;
          } else if (x < bound.left) {
              bound.left = x;
          }

          if (bound.right === null) {
              bound.right = x;
          } else if (bound.right < x) {
              bound.right = x;
          }

          if (bound.bottom === null) {
              bound.bottom = y;
          } else if (bound.bottom < y) {
              bound.bottom = y;
          }
      }
  }
  
  // Calculate the height and width of the content
  var trimHeight = bound.bottom - bound.top,
      trimWidth = bound.right - bound.left,
      trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);

  copy.canvas.width = trimWidth;
  copy.canvas.height = trimHeight;
  copy.putImageData(trimmed, 0, 0);

  // Return trimmed canvas
  return copy.canvas;
}


  export const getWindowHeight = () => {
    let drawing = document.getElementById('drawing-container');
    if (drawing){
      return drawing.clientHeight;
    }

    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }
  
  export const round = (number, precision) => {
    if (precision === undefined) {
      precision = 0
    }
    precision = Math.pow(
      10, (precision-1)
    );
    return (
      Math.round(number*10*precision) / (10*precision)
    );
  }

  export const throttle = (ms, fn) => {
    var lastCallTime;
    return function () {
        var now = Date.now();
        if (!lastCallTime || now - lastCallTime > ms) {
            lastCallTime = now;
            fn.apply(this, arguments);
        }
    }
  }

  export const saveImg = (image) =>
  {

  }