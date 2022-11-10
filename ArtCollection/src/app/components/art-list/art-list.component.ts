import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Art } from 'src/app/models/arts.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent implements OnInit {

  @Input() arts : ReadonlyArray<Art> = [];
  @Output() add = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
