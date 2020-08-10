/* Remember to capitalise the HEX and always call the .toString() to get the result*/
export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const red = parseInt(result[1], 16);
  const green = parseInt(result[2], 16);
  const blue = parseInt(result[3], 16);
  return result ? {
    r: red,
    g: green,
    b: blue,
    toString: () => `rgb(${red}, ${green}, ${blue})`
  } : null;
};


