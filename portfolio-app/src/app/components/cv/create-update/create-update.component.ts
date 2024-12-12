import { Component } from '@angular/core';
import { CVService } from '../../../services/cv.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrl: './create-update.component.scss'
})
export class CreateUpdateComponent {


formGroup?: FormGroup;

constructor(private cvService: CVService) {}

saveCV(): void {
  if (this.formGroup?.valid) {
      let observable = null;
      if (this.formGroup.value.id) {
          observable = this.cvService.updateCV(this.formGroup.value.id, this.formGroup.value);
      } else {
          observable = this.cvService.createCV(this.formGroup.value);
      }
      observable.subscribe(() => history.back());
  } else {
      alert('CV is invalid');
  }
}
}