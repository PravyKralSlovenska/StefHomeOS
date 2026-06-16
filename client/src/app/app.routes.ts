import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { Calendar } from './pages/calendar/calendar';
import { Cloud } from './pages/cloud/cloud';
import { Notes } from './pages/notes/notes';
import { LogIn } from './pages/log-in/log-in';
import { SignUp } from './pages/sign-up/sign-up';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { CalendarLayout } from './layouts/calendar-layout/calendar-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: HomeLayout,
                children: [
                    {
                        path: '',
                        component: Home,
                        title: "Home"
                    }
                ]
            },
            {
                path: "calendar",
                component: CalendarLayout,
                children: [
                    {
                        path: '',
                        component: Calendar,
                        title: "Calendar"
                    }
                ]
            },
            {
                path: "cloud",
                component: Cloud
            },
            {
                path: "notes",
                component: Notes
            }
        ]
    },
    {
        path: "login",
        component: LogIn
    },
    {
        path: "signup",
        component: SignUp
    },
    {
        path: "**",
        component: NotFound
    }
];
