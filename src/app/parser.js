export default function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    try {
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
}
