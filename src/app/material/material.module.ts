import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCardModule } from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCardModule],
  declarations: []
})
export class MaterialModule { }
