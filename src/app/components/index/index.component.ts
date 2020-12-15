import { Component, OnInit } from '@angular/core';
import { RelacionLCR } from 'src/app/models/relacion-lcr';
import { RelationsService } from 'src/app/services/relations.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  titulo='Relacion: Locations -> Countries -> Regions'
  relations: RelacionLCR[] = [];
  constructor(private service: RelationsService) {
  
   }
  
  ngOnInit(): void {
    this.service.listar().subscribe(relations => this.relations = relations);
  }

}
