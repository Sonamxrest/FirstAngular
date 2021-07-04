import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {


 data:any=[]
  constructor(private http:HttpClient,private toast: ToastrService) {

   }

  ngOnInit(): void {
    this.http.get<Response>("http://dummy.restapiexample.com/api/v1/employees").subscribe((datas)=>{
      console.log(datas)
      this.data =datas.data
      console.log(datas.message)

  
        if(datas.status==="success")
        {
          this.toast.success(datas.message)
        }
       

        

    })

  }

  delete(id:any){
    console.log(id)
    this.http.delete<Response>("http://dummy.restapiexample.com/api/v1/delete/"+id).subscribe((data)=>{
    
      if(data.status==="success")
      {
        this.toast.success(data.message)
      }
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
  data:[Employees],
  message:string

}

