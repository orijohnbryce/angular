import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
        console.log("onInit from AboutComponent");        
    }
    ngOnDestroy(): void {
        console.log("onDestroy About");        
    }
}
