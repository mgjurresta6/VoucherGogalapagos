import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-page',
  imports: [],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
  @Input() logoPath: string = 'assets/images/Logo-GoGalapagos-HR-BLANCO.png';
  @Input() voucherNumber: string = '85221';
}
