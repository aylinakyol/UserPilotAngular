import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader:boolean=true;
  constructor(private http: HttpClient, private readonly router: Router) {
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/login')
        this.showHeader=false;
      }
    })
  }
	title = 'NewProject';

  ngOnInit() {

	}
  createForm(){
    
  }

  navigeteTo(route: string) {
    console.log('zaaa');
    
    this.router.navigate([route])
   }
}	