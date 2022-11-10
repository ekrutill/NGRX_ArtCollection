import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Art } from 'src/app/models/arts.model';

@Component({
  selector: 'app-art-collection',
  templateUrl: './art-collection.component.html',
  styleUrls: ['./art-collection.component.scss']
})
export class ArtCollectionComponent implements OnInit {

  @Input() arts : ReadonlyArray<Art> = [];
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
