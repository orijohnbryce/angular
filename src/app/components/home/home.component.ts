import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    // public myNumber = Math.floor(Math.random() * 2); // 0 or 1    

    public today = new Date().getDate();

    public isTuesday() {
        return new Date().getDay() === 1;
    }
}
