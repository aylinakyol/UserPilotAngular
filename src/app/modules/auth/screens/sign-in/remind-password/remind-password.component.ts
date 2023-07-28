import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.scss']
})
export class RemindPasswordComponent implements OnInit {
  passwordForm: FormGroup = new FormGroup({
    eposta: new FormControl(' ', [Validators.required])
  })
  constructor(private kullaniciService: KullaniciService) { }
  ngOnInit() {
    this.initForm();
  }
  initForm() { }

  forgotPassword() {

    if (this.passwordForm.valid) {
      this.kullaniciService.forgotPassword(this.passwordForm.value).subscribe((result) => {

        console.log(result.Description);

      })
    }

  }
}
