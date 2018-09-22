import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  users = [];

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: `ID : ${i + 1}`,
        name: `NAME : ${i}`
      });
    }
  }
}
