import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Observer, Subscription, filter, map } from 'rxjs';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnDestroy {
    public name: string;
    public arr: number[] = [];

    private subscritpion: Subscription;

    public handleChange(){
        console.log(this.name);
        this.name = "David";
    }

    
    // async randWithDelay(){
    //     return new Promise<number>((resolve, reject)=>{
    //         setTimeout(()=>{
    //             try {                    
    //                 const randNumber = Math.random();
    //                 resolve(randNumber);
    //             } catch (error) {
    //                 reject(error);
    //             }
    //         }, 500)        
    //     })
    // }


    randWithDelay(count: number): Observable<number>{
        return new Observable((observer: Observer<number>)=>{
            try {
                const iid = setInterval(()=>{
                    const num = Math.random();
                    observer.next(num);
                    count--;
                    if (count === 0){
                        observer.complete();
                        clearInterval(iid);
                    }
                }, 500)
            } catch (error) {
                observer.error(error)
            }
        })
    }


    async run(){
        const observable = this.randWithDelay(30);

         this.subscritpion = observable.pipe(filter(n=>n>0.1)).subscribe({
            next: (num)=>{this.arr.push(num); console.log(num);
            },
            error: (e)=>{console.log(e)},
            complete: ()=>{alert("Done!")}
        })
        
    }

    async stop(){
        this.subscritpion.unsubscribe();
    }

    ngOnDestroy(): void {
        this.subscritpion.unsubscribe();
    }
}
