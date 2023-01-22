export default function read() {
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    try {
      setTimeout(() => {
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
        return ((input) => {
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i += 1) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
