import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  event_name: string = '';
    manager_name: string = '';
    category: string = '';
    hour: string = '';
    ubication: string = '';
    date: string = '';
    description: string = '';
    final_date: string = '';
    final_hour: string = '';
    value: string = '';
    today = Date.now();
    register = [];
    myForm: FormGroup;
    public orderForm:any;




  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder) {

      this.orderForm = this.formBuilder.group({
        event_name: ['', Validators.required],
      manager_name: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      date: ['', Validators.required],
      final_date: ['', Validators.required],
      hour: ['', Validators.required],
      final_hour: ['', Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required],
      
      });
      this.orderForm.reset()

    //  this.myForm = this.createMyForm();

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  saveData(){
    console.log(this.myForm.value);
  }
  
  sendRegister(){
    var registerRef = firebase.database().ref().child("event_register");
    registerRef.push({event_name: this.event_name, manager_name: this.manager_name,
    category: this.category, hour: this.hour, ubication:this.ubication, date: this.date,
  description: this.description, final_date: this.final_date, final_hour: this.final_hour,
value: this.value});
  }

 
  
    submit() {
      //this.orderForm["event_name"].reset();
      this.orderForm.reset()
      console.log(this.orderForm.value);
    }
  private createMyForm(){
    return this.formBuilder.group({
      event_name: ['', Validators.required],
      manager_name: ['', Validators.required],
      category: ['', Validators.required],
      ubication: ['', Validators.required],
      date: ['', Validators.required],
      final_date: ['', Validators.required],
      hour: ['', Validators.required],
      final_hour: ['', Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required],
      
    });
  }
}
