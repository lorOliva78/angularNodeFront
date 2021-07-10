import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerServ : NgxSpinnerService) { }
    public showSpinner(){
      this.spinnerServ.show();
    }

    public hideSpinner(){
      this.spinnerServ.hide();
    }
  
}
