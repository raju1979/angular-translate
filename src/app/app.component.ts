import { Component,OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tr';

  user = {
    name:'Rajesh',
    age:38
  }

  constructor(private translate: TranslateService){
    translate.setDefaultLang("en");
    translate.use('en');
  }

  switchDefaultLanguage(language:string){
    this.translate.use(language);
  }

  ngOnInit(value='click'){
    this.translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
        console.log(res);
        //=> 'hello world'
    });
  }


}
