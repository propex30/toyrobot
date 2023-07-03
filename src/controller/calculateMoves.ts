import {BoardRobot} from '@src/controller/robot';

export enum Direction {
	NORTH = 'NORTH',
	EAST = 'EAST',
	SOUTH = 'SOUTH',
	WEST = 'WEST'
}

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
				break;
			} else {
				this.robot = new BoardRobot(+placeArray[0], +placeArray[1], placeArray[2] as Direction);
				return this.robot;
			}
			break;
		case 'MOVE':
			break;
		case 'LEFT':
			break;
		case 'RIGHT':
			break;
		case 'REPORT':
			break;
		default:
			return '';
			break;

		}
	}

	checkIfAllowedPlacement(x: number, y: number, direction: Direction): boolean {
		const validDirections = Object.values(Direction);
		return x >= 0 && x < 5 && y >= 0 && y < 5 && validDirections.includes(direction);

	}
}