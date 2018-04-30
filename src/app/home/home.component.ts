import { Component, OnInit } from '@angular/core';

import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    protected result;

    constructor(
        protected homeService: HomeService
    ) { }

    ngOnInit() {
    }

    calculate(value) {
        this.homeService.calculate(value)
            .subscribe(response => this.result = response);
    }

}
