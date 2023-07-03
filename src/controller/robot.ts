export enum Direction {
	NORTH = 'NORTH',
	EAST = 'EAST',
	SOUTH = 'SOUTH',
	WEST = 'WEST'
}

export class BoardRobot {
	x: number;
	y: number;
	direction: Direction;

	constructor(x: number, y: number, direction: Direction) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}

	// We only allow movement in the direction specified if our current location is not already on the edge of the board, last row or column for that coordinate
	moveRobot(){
		switch(this.direction){
		case Direction.NORTH:
			if(this.y < 4){
				this.y++;
			}
			break;
		case Direction.EAST:
			if(this.x < 4){
				this.x++;
			}
			break;
		case Direction.SOUTH:
			if(this.y > 0){
				this.y--;
			}
			break;
		case Direction.WEST:
			if(this.x > 0){
				this.x--;
			}
			break;

		}

	}

	// turn within the points of a compass clockwise or anticlockwise constraining to 0 - 3 as indexes
	rotateRobot(turn: string) {
		const directions = Object.values(Direction);
		const index = directions.indexOf(this.direction);
		if(turn === 'LEFT') {
			this.direction = directions[(index + 3) % 4] as Direction;

		} else{
			this.direction = directions[(index + 1) % 4] as Direction;
		}

	}
}