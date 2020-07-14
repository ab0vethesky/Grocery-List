import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "gr-login",
    providers: [UserService],
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    user: User;

    isLogginIn = true;
    /*
      constructor(private userService: UserService)
      {
        this.user = new User();
      }*/
    /*
  constructor(private userService: UserService) {
      this.user = new User();
      this.user.email = "dipo@progress.com";
      this.user.password = "mypassword";
  }
  */
    constructor(private router: Router, private userService: UserService, private page: Page) {

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
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (exception) => {
                    if (exception.error && exception.error.description) {
                        alert(exception.error.description);
                    }
                    else {
                        alert(exception)
                    }
                }
            )
    }
    signUp() {
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
    toggleDisplay() {
        this.isLogginIn = !this.isLogginIn;
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
}
