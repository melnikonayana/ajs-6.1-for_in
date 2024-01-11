export default function orderByProps(obj, properties) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      result.push({key, value: obj[key]});
    }
  }

  const max = properties.length;
  result.sort((a, b) => {
    let orderA = properties.indexOf(a.key);
    if (orderA < 0) {
      orderA = max;
    }
    let orderB = properties.indexOf(b.key);
    if (orderB < 0) {
      orderB = max;
    }
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  return result;
}
