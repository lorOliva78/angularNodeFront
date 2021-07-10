import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graphic-card-details',
  templateUrl: './graphic-card-details.component.html',
  styleUrls: ['./graphic-card-details.component.css']
})
export class GraphicCardDetailsComponent implements OnInit {
  graficCardDetails:any = {
    name: '', 
    manufacturer:'', 
    model:'', 
    price:'',
    img: ''
  };


  constructor(private _route: ActivatedRoute,private httpClient: HttpClient) {
    console.log('product id = '+ this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log("dkdlfsdkfsd"+id)

    this.httpClient.get('http://localhost:3000/graphics-cards/'+id)
    .subscribe(res =>{
      this.graficCardDetails = res;
      console.log(this.graficCardDetails)
    })
    
  }

}
