import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  actualDate:any;
  title : string ="Admin";
  id:any;
  admin:any;

  constructor( private adminService : AdminService) { }

  ngOnInit() {
    this.actualDate = new Date();
this.adminService.getAdminById(this.id).subscribe(
  (response)=>{
    this.admin = response.admin
    console.log("Here admin by id",this.admin);
    
  }
)

  }

}
