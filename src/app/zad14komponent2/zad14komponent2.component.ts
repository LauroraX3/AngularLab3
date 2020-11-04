import {Component, OnInit} from '@angular/core';
import {DataBooleanService} from "../../dataBoolean.service";
import {DataStringService} from "../../dataString.service";


@Component({
    selector: 'app-zad14komponent2',
    templateUrl: './zad14.komponent2.component.html',
    styleUrls: ['./zad14.komponent2.component.scss']
})
export class Zad14komponent2Component implements OnInit {

    message: string;

    constructor(private data: DataBooleanService, private dataString: DataStringService) {
    }

    ngOnInit(): void {
    }


    newMessageYes() {
        this.data.changeMessage(false);
        this.dataString.changeMessageString("Cieszę się! Idźmy dalej!");
    }

    newMessageNo() {
        this.data.changeMessage(false);
        this.dataString.changeMessageString("Przykro mi, że się męczysz!");
    }
}
