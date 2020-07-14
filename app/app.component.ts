import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "gr-app",  
  template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent {
  /*user: User;

  isLogginIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "dipo@progress.com";
    this.user.password = "mypassword";
  }


  submit() {
    if (this.isLogginIn) {
      this.login();
    }
    else {
      this.signUp();
    }
  }
  login() {

  }
  signUp()
  {
    this.userService.register(this.user)
      .subscribe(
      () => {
        alert("Your account was successfully created. ");
        this.toggleDisplay();
      },
      (exception) => {
        if (exception.error && exception.error.description) {
          alert(exception.error.description);
        }
        else {
          alert(exception);
        }
      }
    )
  }
  toggleDisplay()
  {
    this.isLogginIn = !this.isLogginIn;
  }*/
}
