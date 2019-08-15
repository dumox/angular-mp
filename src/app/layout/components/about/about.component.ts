import { Component, OnInit, Optional, Inject } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantService } from 'src/app/core/services/constant.service';
import { GeneratorService } from 'src/app/core/services/generator.service';

const constant = new ConstantService()
const generatedString = new GeneratorService().getRandomString(15);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    {provide: ConstantService, useValue: constant},
    {provide: GeneratorService, useValue: generatedString}
  ]
})
export class AboutComponent implements OnInit {
  private myName = 'Dima';

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantServiceInstance: ConstantService,
    // @Optional()
    // @Inject(GeneratorService) private getRandomString
    ) { }

  ngOnInit() {
    this.localStorageExample();
    this.configOptionsServiceExample();
    console.log(this.constantServiceInstance.getData());
    console.log(generatedString);
  }

  localStorageExample(): void {
    this.localStorageService.setItem('myName', this.myName);
    const lsValue = this.localStorageService.getItem('myName');
    console.log(lsValue);
    this.localStorageService.removeItem('myName');
  }

  configOptionsServiceExample(): void {
    this.configOptionsService.setField({login: 'newLogin', id: 2, email: 'newEmail'});
    const login = this.configOptionsService.getField('login');
    console.log(login);
  }

}
