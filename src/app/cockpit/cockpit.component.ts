
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    server;


    @ViewChild('f') serverForm: NgForm;

    constructor() { }

    ngOnInit() {

    }



    // onSubmit(formData: NgForm) {
    //   console.log(this.serverForm.value.content);

    // }

    onAddServer() {
        // console.log(this.serverForm.value.content);
        // this.serverElement.push({
        //   name: this.serverForm.value.server,
        //   content: this.serverForm.value.content
        // });
    }

}
