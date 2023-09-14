import { Component, OnInit } from '@angular/core';
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

      this.service.getEth().subscribe(data => {
        this.ethList = data;
        console.table(this.ethList);
      });

    }

    deleteEth(id:number){
      this.service.deleteEth(id).subscribe(data => {
      });
    }

}
