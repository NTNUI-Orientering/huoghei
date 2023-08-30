import { DropdownOption } from './NavDropdown';

const InformationDropDownOptions: DropdownOption[] = [
  {
    path: '/snusk',
    name: 'Snuskeløpet'
  },
  {
    path: '/gamp',
    name: 'Gampeløpet'
  },
  {
    path: '/ungdom',
    name: 'Parløp for ungdom'
  },
  {
    path: '/veteran',
    name: 'Veteranklasse'
  },
  {
    path: '/gjertsenfaktor',
    name: 'Gjertsenfaktoren'
  },
  {
    path: '',
    name: 'Med for første gang?',
    isTextOnly: true
  },
  {
    path: '/huskeliste',
    name: 'Dette må du huske'
  },
  {
    path: '/tips',
    name: 'Tips og triks'
  },
  {
    path: '/faq',
    name: 'Spørsmål og svar'
  }
];

const HistoryDropdownOptions: DropdownOption[] = [
  {
    path: '/tidligere-resultater',
    name: 'Tidligere resultater'
  },
  {
    path: '/statistikk',
    name: 'Statistikk'
  },
  {
    path: '/opprinnelse',
    name: 'Tidenes første Hu og Hei - 1960'
  },
  {
    path: '/blodsvettetarer',
    name: 'Blod, svette og tårer - 1965'
  },
  {
    path: '/bynight',
    name: 'Hu og Hei by Night - 2010'
  },
  {
    path: '/svommefotter',
    name: 'Hu og Hei med svømmeføtter'
  }
];

export { HistoryDropdownOptions, InformationDropDownOptions };
