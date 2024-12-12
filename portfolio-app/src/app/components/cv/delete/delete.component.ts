import { Component, OnInit } from '@angular/core';
import { CVService } from '../../../services/cv.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit {
cv: any;

constructor(
  private cvService: CVService,
  private route: ActivatedRoute,
) {}

ngOnInit(): void {
  this.route.paramMap.pipe(
    map(params => params.get('id')),
    mergeMap(id => this.cvService.getCVById(''+id!))
    ).subscribe(value =>{
      this.cv = value;
   });
}
delete(): void {
  this.cvService.deleteCV(this.cv!.id!)
 }

back(): void{
  history.back();
  } 
}
