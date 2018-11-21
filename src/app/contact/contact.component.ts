import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild(NgForm) contactForm: NgForm;
  contact: Contact;

  private postUrl: string = "https://script.google.com/macros/s/AKfycby9TFQWSiUDR0xrPM6IYSon39MmU7AAazExJWYermVpb9a9Az0/exec";

  constructor() {}

  ngOnInit() {
    this.contact = new Contact();    
  }

  sendMail() {
    console.log("send mail");
    this.handleFormSubmit();
  }

  handleFormSubmit() {
    let data: any = {
      name: this.contactForm.form.controls.name.value,
      email: this.contactForm.form.controls.email.value,
      message: this.contactForm.form.controls.message.value,
      honeypot: this.contactForm.form.controls.honeypot.value
    };

    if (this.validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }

    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open('POST', this.postUrl);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      console.log( xhr.status, xhr.statusText );
      console.log(xhr.responseText);
      document.getElementById('gform').style.display = 'none'; // hide form
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    // url encode form data for sending as post data
    let encoded: any = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
    xhr.send(encoded);
  }

  validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }

}

export class Contact {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

