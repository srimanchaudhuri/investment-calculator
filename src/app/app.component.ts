import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { InvestmentInputs } from './user-input/user-input.model';
import { Result } from './investment-result/investment-result.model';
import { ResultService } from './investment-result/investment-results.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  annualData? : Array<Result>;
  private resultService = new ResultService()

  constructor(resultService: ResultService) {
    this.resultService = resultService
  }

  onCalculateInvestmentResults({initialInvestment, expectedReturn, duration, annualInvestment} : InvestmentInputs) {

    this.annualData = this.resultService.calculateInvestmentResults({initialInvestment, expectedReturn, duration, annualInvestment})

  }

}
