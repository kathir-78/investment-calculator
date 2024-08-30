export interface InvestmentModel {
        initialInvestment:number,
        annualInvestment:number,
        duration: number,
        expectedReturn: number
}

export interface OutputModel {
        year:number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest:number,
        totalAmountInvested:number
}[];