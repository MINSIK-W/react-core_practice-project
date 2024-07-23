import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ input }) {
  const resultsDate = calculateInvestmentResults(input);
  console.log(resultsDate);
  return <p>Results...</p>;
}
