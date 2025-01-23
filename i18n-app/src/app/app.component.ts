import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'i18n-app';
 
  constructor(
    private translationService: TranslateService
  ) {
    const lang = localStorage.getItem('language') ?? 'en'
    this.selectLanguage(lang);

  }
 
  selectLanguage(language: string): void{
    this.translationService.use(language)
    localStorage.setItem('language',language);
  }
}