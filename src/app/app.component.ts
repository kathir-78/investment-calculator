import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentModel, OutputModel } from './investment-model';
import { OutputComponent } from "./output/output.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, OutputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
   
  results?:{
    year:number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest:number,
    totalAmountInvested:number
}[];

  calculateInvestmentResults(data:InvestmentModel) 
  {
    const {initialInvestment,annualInvestment,duration,expectedReturn}  = data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.results= annualData;
  }
}
