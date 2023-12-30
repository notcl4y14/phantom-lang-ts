let { TokenType, Token } = require("./lang/token");

let main = function(): void {
	console.log("Hello World!");

	let token = new Token(TokenType.String, "Hello World!");
	console.log( token.string() );
	console.log( token );
}

main();