import { processQuery } from '@src/controller/processQuery';
import { CalculateMoves } from '@src/controller/calculateMoves';

jest.mock('@src/controller/calculateMoves');


describe('test the robot query responses', () => {
	it('should call processMove and return "test"', () => {
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
});