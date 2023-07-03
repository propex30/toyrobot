import * as readline from 'readline';
import {processQuery} from './controller/processQuery';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

export function cliAskQuestion() {
	rl.question('Robot Controller: Please enter Your move: ', (answer) => {
		if(answer.toLowerCase() === 'exit'){
			rl.close();
		} else {
			const response = processQuery(answer);
			if(response){
				console.log(response);
			}
			cliAskQuestion();  // recursion here
		}
	});
}

cliAskQuestion(); // initial call