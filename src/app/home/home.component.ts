import { Component, OnInit } from '@angular/core';

import { HomeService } from "./home.service";
import { Result } from "./result.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    result: Result;

    constructor(
        protected homeService: HomeService
    ) { }

    ngOnInit() {
    }

    calculate(value) {
        this.homeService.calculate(value)
            .subscribe(response => this.result = response.result);
    }

}
