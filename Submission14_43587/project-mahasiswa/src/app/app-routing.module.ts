import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MatkulListComponent } from './matkul-list/matkul-list.component';

const routes: Routes = [
  { path: 'mahasiswa-list', component: MahasiswaListComponent },
  { path: 'pengurus-list', component: PengurusListComponent },
  { path: 'matkul-list', component: MatkulListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
