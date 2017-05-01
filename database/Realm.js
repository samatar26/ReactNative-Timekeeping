import Realm from 'realm';

class Klant {}
Klant.schema = {
  name: 'Klant',
  properties: {
    id: 'int',
    voornaam: 'string',
    achternaam: 'string',
    adres: 'string',
    huisnummer: 'string',
    postcode: 'string',
    woonplaats: 'string'
  }
};

export default new Realm({schema: [Klant]});
