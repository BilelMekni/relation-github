import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  pageOfItems: Array<any>;
  admin:any=[];
  

  constructor(private adminService : AdminService , private router : Router) { }

  ngOnInit() {
    this.adminService.getAllAdmin().subscribe(
      (response)=>{
        this.admin = response.admin;
        console.log("here admin",this.admin);
        
      }
    )
    
  }
  deleteAdmin(id : any){
    this.adminService.deleteAdmin(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        this.getAllAdmins();
      }
     );

  }
  ///----minimiser de code ----////
  getAllAdmins(){
    this.adminService.getAllAdmin().subscribe(
      (response) => {
        this.admin = response.admin;
      }
    )


    }
    ///display to go espace client--////
    displayEspaceClient(){
      this.router.navigate(["listeReservations"]);
    }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
  }
