import {BoardRobot, Direction} from '@src/controller/robot';

// take the first word of a command and process accordingly
export class CalculateMoves {
	robot: BoardRobot | null = null;
	processMove(args: string) {

		const argsArray = args.split(' ');
		let placeArray: string[];


		switch (argsArray[0]) {
		case 'PLACE':
			placeArray = argsArray[1].split(',');
			// if not an allowed placement
			if (!this.checkIfAllowedPlacement(+placeArray[0], +placeArray[1], placeArray[2] as Direction)) {
				return '';
			} else {
				this.robot = new BoardRobot(+placeArray[0], +placeArray[1], placeArray[2] as Direction);
				return this.robot;
			}
		case 'MOVE':
			this.robot?.moveRobot();
			return this.robot;
		case 'LEFT':
		case 'RIGHT':
			this.robot?.rotateRobot(argsArray[0]);
			return this.robot;
		case 'REPORT':
			// dump the current robots location
			return `${this.robot?.x},${this.robot?.y},${this.robot?.direction}`
		default:
			return '';
		}
	}

	// check if our placement command can fit on a 5x5 board
	checkIfAllowedPlacement(x: number, y: number, direction: Direction): boolean {
		const validDirections = Object.values(Direction);
		return x >= 0 && x < 5 && y >= 0 && y < 5 && validDirections.includes(direction);

	}
}