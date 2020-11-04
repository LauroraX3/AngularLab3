import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class DataStringZad15Service {

    private messageSource = new BehaviorSubject('');
    currentMessageString = this.messageSource.asObservable();

    constructor() { }

    changeMessageStringZad15(message: string) {
        this.messageSource.next(message)
    }

}