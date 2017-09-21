import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ServicCreateComponent } from './servic-create/servic-create.component';
import { ServicshowComponent } from './servicshow/servicshow.component';
import { GuardComponent } from './guard/guard.component';



const Routes: Routes = [
    { path: 'child1', component: Child1Component, canActivate: [AppGuard]  },
    { path: 'child2', component: Child2Component, canActivate: [AppGuard]  },
    { path: 'create', component: ServicCreateComponent , canActivate: [AppGuard] },
    { path: 'create/:id', component: ServicCreateComponent, data: { name: 'hello' } , canActivate: [AppGuard]  },
    { path: 'show', component: ServicshowComponent, canActivate: [AppGuard]  },
    { path: 'guard', component: GuardComponent, canActivate: [AppGuard] },
]


export const AppRouting = RouterModule.forRoot(Routes);