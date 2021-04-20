import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}
  `
})
export class AppComponent {
  name = "Angular ";
  clickMessage = "";

  work() {
    this.clickMessage = "You are my hero!";
  }
}
