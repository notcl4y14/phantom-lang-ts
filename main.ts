import { Lexer } from "./lang/lexer";

let main = function(): void {
	let lexer = new Lexer("+-*/%^ += -= *= /= %= ^= < > = <= >= == != .,:;&|!");
	let tokens = lexer.lexerize();

	console.log(tokens);
}

main();