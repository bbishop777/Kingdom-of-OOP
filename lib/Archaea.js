import LivingThing from './LivingThing';

export default class Archaea extends LivingThing {
  constructor (name, uniCellular) {
    super( name, uniCellular, false, true, true, false );
  }
}