import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-mahasiswa-list',
  templateUrl: './mahasiswa-list.component.html',
  styleUrls: ['./mahasiswa-list.component.css']
})
export class MahasiswaListComponent implements OnInit {

  public mhs: any = [];

  constructor(private mhsService: MahasiswaService) { }

  ngOnInit() {
    this.mhs = this.mhsService.getEmployees();
  }

}
