import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    return data.then((response) => {
      const dataBuffer = response;
      json(dataBuffer).then((value) => value);
    }).catch((error) => new Error(error));
  }
}
