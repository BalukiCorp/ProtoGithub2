import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { pipe } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
    photoURL: string= '';
    today = Date.now();
    register = [];
    myForm: FormGroup;
    public orderForm:any;




  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder, private storage: AngularFireStorage) {

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
  uploadPercent: Observable<number>;
urlImage: Observable<string>;
@ViewChild('imageUser') inputImageUser: ElementRef;
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  
  saveData(){
    console.log(this.myForm.value);
  }
  
 /* sendRegister(){
    var registerRef = firebase.database().ref().child("event_register");
 
  
    registerRef.push({event_name: this.event_name, manager_name: this.manager_name,
    category: this.category, hour: this.hour, ubication:this.ubication, date: this.date,
  description: this.description, final_date: this.final_date, final_hour: this.final_hour,
value: this.value});
//imagenes.push({photoURL: this.urlImage})
  }
*/

sendRegister() {
  let textInput = document.querySelector("#imageUser");
   var registerRef = firebase.database().ref().child("event_register");
   registerRef.push({
     event_name: this.event_name, manager_name: this.manager_name,
     category: this.category, hour: this.hour, ubication: this.ubication, date: this.date,
     description: this.description, final_date: this.final_date, final_hour: this.final_hour,
     value: this.value, photoURL: textInput.value
 
   }); 
}
  
    submit() {
      //this.orderForm["event_name"].reset();
      this.orderForm.reset()
      console.log(this.orderForm.value);
      
    }

    
    onUpload(e){
     //  console.log('subir', e);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `event_image/event_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
this.uploadPercent = task.percentageChanges();
task.snapshotChanges().pipe(finalize(()=>this.urlImage = ref.getDownloadURL())).subscribe();

}

/*

inicializar(){
 var fichero = document.getElementById("fichero");
fichero.addEventListener("change", this.subirImagen, false);
var imageneStorageRef = firebase.storage().ref();
}

subirImagen(){
  var fichero = document.getElementById("fichero");
  fichero.addEventListener("change", this.subirImagen, false);
  var imagenASubir = fichero.firstElementChild[0];
  var imageneStorageRef = firebase.storage().ref();

var uploadTask = imageneStorageRef.child("imagenes/" + imagenASubir.name).put(imagenASubir);

}

*/
    
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
