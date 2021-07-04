import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  headers = { 'Content-Type': 'application/json'}  
  id:any
Name:any
emp:any
formdata = new FormGroup({
  name: new FormControl('asdasd'),
  salary: new FormControl(''),
  age: new FormControl('')
})


  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) { 


  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params
     this.http.get<Response>("http://dummy.restapiexample.com/api/v1/employee/"+params["id"]).subscribe((data)=>{
this.Name=data.data.employee_name
      this.formdata = new FormGroup({
        name: new FormControl(data.data.employee_name),
        salary: new FormControl(data.data.employee_salary),
        age: new FormControl(data.data.employee_age)
      })

     })
    })
  }

  onSubmit(data:any){
    this.emp ={
      id:this.id,
      employee_name:this.formdata.value.name,
      employee_salary:this.formdata.value.salary,
      employee_age:this.formdata.value.age,
      profile_image:""
    }
    this.http.put("http://dummy.restapiexample.com/api/v1/update/"+this.id,this.formdata.value,{
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).subscribe((data)=>{
      console.log(data)
    })

  }
}
interface Employees{
  id:String,
  employee_name:String,
  employee_salary:String,
  employee_age:String,
  profile_image:String
}
interface Response{
  status:String,
  data:Employees,
  message:String

}