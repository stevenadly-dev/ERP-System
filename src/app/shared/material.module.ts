import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatExpansionModule,
  MatTreeModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatButtonModule
];

@NgModule({
  imports: [...MaterialComponents],
  exports: [...MaterialComponents],
  declarations: [],
})
export class MaterialModule { }
