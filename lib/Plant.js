import Eukaryota from './Eukaryota';
//name, uniCellular, asexual, mobile, heterotroph
export default class Plant extends Eukaryota {
  constructor (name) {
    super( name, false, true, false, false);
  }
}