import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';
import { CommonModule } from '@angular/common';
import {
  filter,
  map,
  reduce,
  scan,
  Subscription,
  takeLast,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public arr: number[] = [];
  public constructor(private generatorService: GeneratorService) {}

  public subscription: Subscription;

  ngOnInit(): void {}

  start() {
    // crete observable
    const observable = this.generatorService.generate(20);
    // not started yet. need registration

    // without High-Order-Functions (pip operators)
    this.subscription = observable.subscribe({
      next: (num) => {
        this.arr.push(num);
        console.log(num);
      }, // on next
      error: (err) => alert(err.message), // on error
      complete: () => alert('Done'), // on done
    });
  }

  stop() {
    this.subscription?.unsubscribe();
  }
}
