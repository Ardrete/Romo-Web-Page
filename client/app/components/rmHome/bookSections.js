import book1 from '../../common/img/book1.jpg';
import book2 from '../../common/img/book2.jpg';
import book3 from '../../common/img/book3.jpg';
import book4 from '../../common/img/book4.jpg';
import book5 from '../../common/img/book5.jpg';
import book6 from '../../common/img/book6.jpg';
import book7 from '../../common/img/book7.jpg';
import book8 from '../../common/img/book8.jpg';
import bookOpen1 from '../../common/img/book-open1.jpg';
import bookOpen2 from '../../common/img/book-open2.jpg';
import bookOpen3 from '../../common/img/book-open3.jpg';
import bookOpen4 from '../../common/img/book-open4.jpg';
import bookOpen5 from '../../common/img/book-open5.jpg';
import bookOpen6 from '../../common/img/book-open6.jpg';
import bookOpen7 from '../../common/img/book-open7.jpg';
import bookOpen8 from '../../common/img/book-open8.jpg';

const sections = {
  distribution: {
    name: 'Almacenaje y distribución',
    link: 'distribution'
  },
  packing: {
    name: 'Empaque',
    link: 'packing'
  },
  printing: {
    name: 'Imprenta',
    link: 'printing'
  },
  video: {
    name: 'Video',
    link: 'video'
  },
  prices: {
    name: 'Premios',
    link: 'prices'
  },
  premedia: {
    name: 'Premedia',
    link: 'premedia'
  },
  design: {
    name: 'Diseño gráfico',
    link: 'design'
  },
  editionCare: {
    name: 'Coordinación editorial',
    link: 'editionCare'
  },
  photography: {
    name: 'Fotografía y video',
    link: 'photography'
  }
};

const bookSections = [{
  image: book1,
  name: 'Alas de la ciudad',
  imageOpen: bookOpen1,
  sections: [
    /*Saqué: video y empaque*/
    sections.distribution,
    sections.printing,
    sections.prices,
    sections.premedia,
    sections.design,
    sections.editionCare,
    sections.photography,
    sections.packing
  ]
}, {
  image: book2,
  name: 'Retrotábula',
  imageOpen: bookOpen2,
  sections: [
      /*Saque video y empaque*/
    sections.distribution,
    sections.printing,
    sections.prices,
    sections.premedia,
    sections.design,
    sections.editionCare
  ]
}, {
  image: book3,
  name: 'México. Encanto y pasión',
  imageOpen: bookOpen3,
  sections: [
    sections.printing,
    sections.premedia,
    sections.distribution
  ]
}, {
  image: book4,
  name: 'Habeas Corpus',
  imageOpen: bookOpen4,
  sections: [
      /*Saque video y empaque*/
    sections.distribution,
    sections.printing,
    sections.prices,
    sections.premedia,
    sections.design,
    sections.editionCare
  ]
}, {
  image: book5,
  name: 'La patria',
  imageOpen: bookOpen5,
  sections: [
      /*Saque empaque*/
    sections.distribution,
    sections.printing,
    sections.prices,
    sections.premedia
  ]
}, {
  image: book6,
  name: '14 flores',
  imageOpen: bookOpen6,
  sections: [
      /*Saque video y empaque*/
    sections.distribution,
    sections.printing,
    sections.prices,
    sections.premedia,
    sections.photography,
    sections.design,
    sections.editionCare
  ]
}, {
  image: book7,
  name: 'Regalos',
  imageOpen: bookOpen7,
  sections: [
    sections.printing,
    sections.premedia,
    sections.distribution,
    sections.photography
  ]
}, {
  image: book8,
  name: 'Mulli',
  imageOpen: bookOpen8,
  sections: [
      /*Saque empaque*/
    sections.distribution,
    sections.printing,
    sections.premedia,
    sections.prices,
    sections.editionCare
  ]
}];

export default bookSections;
