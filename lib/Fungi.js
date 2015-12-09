import Eukaryota from './Eukaryota';
//name, uniCellular, asexual, mobile, heterotroph
export default class Fungi extends Eukaryota {
  constructor (name) {
    super( name, false, true, false, true);
  }
}