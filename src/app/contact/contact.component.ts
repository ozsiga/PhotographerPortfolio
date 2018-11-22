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
    };

    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open('POST', this.postUrl);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      document.getElementById('gform').style.display = 'none';
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    let encoded: any = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
    xhr.send(encoded);
  }

}

export class Contact {
  name: string;
  email: string;
  message: string;
}

