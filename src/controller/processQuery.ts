import { CalculateMoves } from './calculateMoves'; // adjust the path to match the location of your file


export function processQuery(args: string) {
	const calc = new CalculateMoves();
	calc.processMove(args);
	return 'test';
}