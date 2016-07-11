import { useView } from 'aurelia-framework';
import { SimpleComponent } from './simple';
import { OPTIONS } from './raw-results';

@useView('components/simple-component.html')
export class ResultsComponent extends SimpleComponent {

  constructor() {
    super({
      riot: 'gb-results',
      attach: 'results',
      display: 'Results Component'
    });
  }

  options = OPTIONS;
  structure = `
  <${this.name.riot}>
    <a href="#">
      <img src="example.com/path/to/image.png" />
    </a>
    <a href="#">
      <p>Marin White Pasta-Low Bowl</p>
      <p>9.95</p>
    </a>
  </${this.name.riot}>
  `;

  attached() {
    searchandiser.attach(this.name.attach);
    searchandiser.flux.emit(searchandiser.flux.RESULTS, {
      records: [
        {
          allMeta: {
            title: 'Marin White Pasta-Low Bowl',
            price: 9.95,
            wideImage: 'http://images.crateandbarrel.com/is/image/Crate/MarinWhitePastaLowBowl9p25inSHF15/$web_setitem_fj_2col$/1510061440/marin-white-pasta-low-bowl.jpg'
          }
        },
        {
          allMeta: {
            title: 'Marin Blue Mug',
            price: 7.95,
            wideImage: 'http://images.crateandbarrel.com/is/image/Crate/MarinBlueMug12ozSHF15/$web_setitem_fj_2col$/1510021430/marin-blue-mug.jpg'
          }
        },
        {
          allMeta: {
            title: 'Marin Blue 10.25" Serving Bowl',
            price: 29.95,
            wideImage: 'http://images.crateandbarrel.com/is/image/Crate/MarinBlueServeBowl10p25inSHF15/$web_setitem_fj_2col$/1510191350/marin-blue-serving-bowl.jpg'
          }
        }
      ]
    })
  }
}
