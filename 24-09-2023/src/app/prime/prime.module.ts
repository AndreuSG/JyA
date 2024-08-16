import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [MenubarModule, SidebarModule, ButtonModule, TieredMenuModule]
})
export class PrimeModule { }
