import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
 
})
export class FormComponentComponent implements OnInit {

   headers = { 'Content-Type': 'application/json'}  

formdata = new FormGroup({
  name: new FormControl(''),
  salary: new FormControl(''),
  age: new FormControl('')
})

  constructor(private http:HttpClient,private toast:ToastrService) { }

  onSubmit(data:any){
console.log(this.formdata.value)
this.http.post<Response>("http://dummy.restapiexample.com/api/v1/create",this.formdata.value,{
  headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}).subscribe((data)=>{
  if(data.status=="success")
  {
this.toast.success("Account Created")
  }
  else{
    this.toast.error("Something Went Wrong")
  }
})

  }
  ngOnInit(): void {

   
  }



}
interface Response {
status:string,
data:{}
}
