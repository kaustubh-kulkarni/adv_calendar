import { Routes } from '@angular/router';

//Lazy loading for the component
export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./feature/calendar/main-grid.component').then((c) => c.MainGridComponent),
    }
];
