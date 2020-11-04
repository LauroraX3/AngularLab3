import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Zad17DataStringService {

    private messageSource = new BehaviorSubject('');
    currentMessageString = this.messageSource.asObservable();

    constructor() { }

    changeMessageString(message: string) {
        this.messageSource.next(message)
    }

}