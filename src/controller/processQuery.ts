import { CalculateMoves } from './calculateMoves'; // adjust the path to match the location of your file

export function processQuery(calc: CalculateMoves, args: string) {
	return calc.processMove(args);
}