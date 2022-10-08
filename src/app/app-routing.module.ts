import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarsComponent} from "./cars/cars.component";
import {CarPageComponent} from "./car-page/car-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const appRoutes: Routes = [
  {
    path: 'cars', component: CarsComponent


  }, {path: 'cars/:id', component: CarPageComponent}
  ,
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
