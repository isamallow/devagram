import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PublicInputComponent } from './public/public-input/public-input.component';
import { FormsModule } from '@angular/forms';
import { PublicPageComponent } from './public/public-page/public-page.component';
import { FooterComponent } from './public/footer/footer.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    PublicInputComponent,
    PublicPageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    AvatarComponent,
    UploadImageComponent,
    PublicInputComponent,
    PublicPageComponent,
    FooterComponent
  ]
})
export class SharedModule { }
