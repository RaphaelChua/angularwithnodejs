import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { LoginComponent } from '../login'
import { RegisterComponent } from '../register'
import { ReportComponent } from './report.component'

const routes: Routes=[
    {
        path:'home', component:HomeComponent,
        children:[
            {path:'report',component:ReportComponent},
        ]

    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HomeRoutingModule{}