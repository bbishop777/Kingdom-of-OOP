import Bilateral from './Bilateral';
//name, body
export default class Vertebrate extends Bilateral {
  constructor (name) {
    super( name, 'vertebral-column');
  }
}