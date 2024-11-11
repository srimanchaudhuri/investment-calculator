import { Component, input } from '@angular/core';
import { Result } from './investment-result.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  results = input<Array<Result>>()

}
