import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './FirstComponent/firstcomponent.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

const routes: Routes = [{
  path:"first-component",component:FirstcomponentComponent
},{
  path:"form",component:FormComponentComponent
},
{
  path:"update/:id",component:UpdateComponentComponent
}
,]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
