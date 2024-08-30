import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Input() resultsdata?: {
    year:number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest:number,
    totalAmountInvested:number
}[];
}
