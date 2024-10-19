import { Routes } from '@angular/router';
import { HomeComponent } from './views/dashboard/home/home.component';
import { GroupsComponent } from './views/notes/groups/groups.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { NoteComponent } from './views/notes/groups/note/note.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'note-details/:id', component: NoteComponent },
];
