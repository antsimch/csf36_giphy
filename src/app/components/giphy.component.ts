import { Component, OnDestroy } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnDestroy {

  searchTerm!: string;
  searchResults: string[] = [];
  sub$!: Subscription;

  constructor(private giphySvc: GiphyService) {}

  onSubmit(name: string) {
    this.searchTerm = name;
    console.log(name)
    this.sub$ = this.giphySvc
        .getGiphyByName(name)
        .subscribe(data => {
          this.searchResults = data;
          console.log("searchResult[0]: " + this.searchResults[0]);
        });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
