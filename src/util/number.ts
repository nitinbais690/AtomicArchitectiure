function rounded(val: any, toFixed: number = 1) {
  if (val) {
    if (typeof val === 'string') {
      val = parseFloat(val);
    }
    if (val - Math.floor(val) === 0) {
      val = Math.floor(val);
    } else {
      val = val.toFixed(toFixed);
    }

    return val;
  }
  return val;
}

export const num = {
  rounded,
};
