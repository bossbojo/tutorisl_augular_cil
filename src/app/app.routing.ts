import { Routes,RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ServicCreateComponent } from './servic-create/servic-create.component';
import { ServicshowComponent } from './servicshow/servicshow.component';

const Routes:Routes = [
    { path: 'child1' ,component : Child1Component},
    { path: 'child2' ,component : Child2Component},
    { path: 'create' ,component : ServicCreateComponent},
    { path: 'show' ,component : ServicshowComponent},
]


export const AppRouting = RouterModule.forRoot(Routes);