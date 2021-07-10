import { Component, EventEmitter, OnInit,Output/* , ChangeDetectionStrategy  */} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-graphics-cards',
  templateUrl: './graphics-cards.component.html',
  styleUrls: ['./graphics-cards.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardsComponent implements OnInit {

  @Output() id: EventEmitter<number> = new EventEmitter<number>();
  graphicCard: any = {
    name: 'eewwwwee', 
    manufacturer:'aaa', 
    model:'eeee', 
    price:'2222',
    img:'jjj'
  }

  graphicsCards: any = [this.graphicCard];
  

  constructor(private httpClient: HttpClient, private spinnerSer:SpinnerService) { }

  ngOnInit(): void {
    //this.spinnerSer.showSpinner()
    this.httpClient.get('http://localhost:3000/graphics-cards')
    .subscribe(res =>{
      this.graphicsCards = res;
      console.log(this.graphicsCards)
    })
  }

  emitirIndice(i:any){

    this.id.emit(i);
    console.log('indice del objeto = '+i);
  }

}
