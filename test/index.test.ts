import { processQuery } from '@src/controller/processQuery';
import { CalculateMoves } from '@src/controller/calculateMoves';

jest.mock('@src/controller/calculateMoves');


describe('test the robot query responses', () => {
	it('should call processMove and a response "test"', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs   = 'MOVE';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should handle PLACE Command', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'PLACE 2,3,NORTH';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should handle Move Command', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'MOVE';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should handle LEFT Command', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'LEFT';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should handle RIGHT Command', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'RIGHT';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should handle REPORT Command', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'REPORT';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should handle a series of commands and not create a new instance of the class each time', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'REPORT';

		// Act
		const result = processQuery(testArgs);

		// Assert
		expect(processMoveMock).toHaveBeenCalledWith(testArgs);
		expect(result).toBe('test');
	});

	it('should ignore commands that make it fall off the table', () => {
		// Arrange
		const processMoveMock = jest.fn();
		(CalculateMoves as jest.Mock).mockImplementation(() => {
			return {processMove: processMoveMock};
		});
		const testArgs  = 'PLACE 4,4,NORTH';

		// Act
		processQuery(testArgs);

		const testArgs2  = 'REPORT';

		// Act
		const result = processQuery(testArgs2);

		expect(result).toBe('4,4,NORTH');

		const testArgs3  = 'MOVE';

		// Act
		processQuery(testArgs3);

		const testArgs4  = 'REPORT';

		// Act
		const result2 = processQuery(testArgs4);
		// result2 is still the same as before as a move north would place the robot off the table
		expect(result2).toBe('4,4,NORTH')

	});

});