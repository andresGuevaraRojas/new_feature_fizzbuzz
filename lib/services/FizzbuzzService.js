class FizzbuzService {
    static applyValidationInExplorer(explorer) {
        explorer.trick = this.applyValidationInNumber(explorer.score);        
        return explorer;
    }

    static applyValidationInNumber(number){

        const FIZZ = "FIZZ";
        const BUZZ = "BUZZ";
        const FIZZBUZZ = FIZZ + BUZZ;

        if (number % 5 === 0 && number % 3 === 0) {
            return FIZZBUZZ;
        } 
        if (number % 3 === 0) {
            return FIZZ;
        } 
        if (number % 5 === 0) {
            return BUZZ;
        }
        
        return number;        
    }
}

module.exports = FizzbuzService;
