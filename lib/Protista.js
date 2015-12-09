import Eukaryota from './Eukaryota';
//name, uniCellular, asexual, mobile, heterotroph
export default class Protista extends Eukaryota {
  constructor (name, uniCellular, mobile, heterotroph) {
    super( name, uniCellular, true, mobile, heterotroph);
  }
}
