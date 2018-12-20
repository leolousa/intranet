import { Component, OnInit } from '@angular/core';
import { faAddressBook, faAddressCard, faSquare, faChartBar, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  // Ícones do FontAwesome a serem utilizados no componente
  faAddressBook = faAddressBook;
  faAddressCard = faAddressCard;
  faSquare = faSquare;
  faChartBar  = faChartBar;
  faPlusSquare  = faPlusSquare;

  constructor() { }

  ngOnInit() {
  }

}
