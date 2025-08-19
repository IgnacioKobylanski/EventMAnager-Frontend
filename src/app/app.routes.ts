import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { EventDetailComponent } from './features/events/components/event-detail/event-detail.component';

export const routes: Routes = [
    {path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: HomeComponent},
        { path: 'event/:id', component: EventDetailComponent}
    ]
},
 { path: '**', redirectTo: '' }
];
