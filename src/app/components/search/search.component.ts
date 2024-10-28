import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchText = ""
  public searchTooltip = "search for product"

  public search() {
    console.log("searching for " + this.searchText);
    this.searchText = "yo"
  }
}
