import { Injectable } from '@angular/core';
import { InvestmentInputs } from './../user-input/user-input.model';

@Injectable({providedIn: "root"})
export class ResultService
{

calculateInvestmentResults({initialInvestment, expectedReturn, duration, annualInvestment} : InvestmentInputs) {
  let investmentValue = initialInvestment;
  const annualData = []
  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
      year: year,
      interest: parseFloat(interestEarnedInYear.toFixed(2)),
      valueEndOfYear: parseFloat(investmentValue.toFixed(2)),
      annualInvestment: parseFloat(annualInvestment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData
}

}
