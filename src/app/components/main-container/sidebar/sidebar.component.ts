import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm): void {
    const {search} = form.value;
    console.log(search);

    if (form.invalid) {
      return;
    }
  }
}
