import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Task1Component } from './task-1/task-1.component';

export const routes: Routes = [
    {
        path:'',
        component:Task1Component 
    }
    // {
    //      path: '', redirectTo: 'task-1', pathMatch: 'full'
    // }
];
