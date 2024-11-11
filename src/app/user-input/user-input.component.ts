import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputs } from '../user-input/user-input.model'

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
initialInv? : number
annualInv? : number
expectedReturn? : number
duration? : number

investmentInputs? : InvestmentInputs
sendInputs = output<InvestmentInputs>()
onSubmit() {
  this.investmentInputs = {
    initialInvestment: this.initialInv || 0,
    annualInvestment: this.annualInv || 0,
    expectedReturn: this.expectedReturn || 0,
    duration: this.duration || 0
  }

  this.sendInputs.emit(this.investmentInputs)
}



}
