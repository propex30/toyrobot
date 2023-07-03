import { processQuery } from '@src/controller/processQuery';
import { CalculateMoves } from '@src/controller/calculateMoves';
// import {BoardRobot} from '@src/controller/robot';

//jest.mock('@src/controller/calculateMoves');




describe('test the robot query responses', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});
	// it('should call processMove and a response "test"', () => {
	//
	// 	const testArgs   = 'MOVE';
	//
	// 	const result = processQuery(calc, testArgs);
	//
	// 	expect(result).toBe('test');
	// });

	it('should handle bad PLACE Command by ignoring it and returning empty string', () => {

		const testArgs  = 'PLACE 5,3,NORTH';

		// Act
		const result = processQuery(calc, testArgs);

		// Assert
		expect(result).toBe('');
	});

	it('should handle PLACE Command', () => {
		const testArgs  = 'PLACE 2,3,NORTH';
		const result = processQuery(calc, testArgs);
		expect(typeof result).toBe('object');
		expect(result).toHaveProperty('x');
		expect(result).toHaveProperty('y');
		expect(result).toHaveProperty('direction');
	});

	it('should handle REPORT Command', () => {
		const testArgs1  = 'PLACE 2,3,NORTH';
		processQuery(calc, testArgs1);
		const testArgs2  = 'REPORT';
		const result2 = processQuery(calc, testArgs2);
		expect(result2).toBe('2,3,NORTH');
	});

	it('should handle Move Command', () => {

		const testArgs  = 'MOVE';
		const result = processQuery(calc, testArgs);
		expect(result).toBe('test');
	});

	it('should handle LEFT Command', () => {
		const testArgs  = 'LEFT';
		const result = processQuery(calc, testArgs);
		expect(result).toBe('test');
	});

	it('should handle RIGHT Command', () => {
		const testArgs  = 'RIGHT';
		const result = processQuery(calc, testArgs);
		expect(result).toBe('test');
	});

	it('should handle a series of commands and not create a new instance of the class each time', () => {
		const testArgs  = 'REPORT';
		const result = processQuery(calc, testArgs);
		expect(result).toBe('test');
	});

	it('should ignore commands that make it fall off the table', () => {
		const testArgs  = 'PLACE 4,4,NORTH';

		processQuery(calc, testArgs);

		const testArgs2  = 'REPORT';

		const result = processQuery(calc, testArgs2);

		expect(result).toBe('4,4,NORTH');

		const testArgs3  = 'MOVE';

		processQuery(calc, testArgs3);

		const testArgs4  = 'REPORT';

		const result2 = processQuery(calc, testArgs4);
		// result2 is still the same as before as a move north would place the robot off the table
		expect(result2).toBe('4,4,NORTH')

	});

});