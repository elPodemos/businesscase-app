import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { EthService } from '../service/eth.service';
import { EthInterface } from '../interface/eth.interface';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent implements OnInit {

    constructor(
      private service:EthService
      ){}

    ethList: EthInterface[] | undefined;

    ngOnInit(): void {

      this.getEth();

    }

    getEth(){
      this.service.getEth().subscribe(data => {
        this.ethList = data;
      });
    }

    deleteEth(id:number, index:number){
      this.service.deleteEth(id).subscribe(data => {
        this.ethList?.splice(index, 1);
      });
    }

    onSubmit(form: NgForm){
      this.service.addEth(form.value).subscribe(data => {
        this.getEth();
      });
    }

}
