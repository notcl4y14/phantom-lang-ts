import { TokenType, Token } from "./token";

export class Lexer {
	public code: string;
	public position: number;

	public constructor(code: string) {
		this.code = code;
		this.position = -1;

		this.advance();
	}

	// ---------------------------------------------------------------------------------------------

	public getCode() {
		return this.code;
	}

	public getPosition() {
		return this.position;
	}

	public isEof() {
		return this.getPosition() >= this.getCode().length;
	}

	// ---------------------------------------------------------------------------------------------

	public at(range: number = 1) {
		if (range == 1) {
			return this.getCode()[this.getPosition()];
		}

		return this.getCode().substr(this.getPosition(), range);
	}

	public advance(delta: number = 1) {
		this.position += 1;
	}

	// ---------------------------------------------------------------------------------------------

	public lexerize() {
		let list: Token[] = [];

		while (!this.isEof()) {
			if ((" \t\r\n").includes(this.at())) {
				// Skip
			} else if ( ["+=","-=","*=","/=","%=","^=","<=",">=","==","!="].includes(this.at(2)) ) {
				list.push( new Token(TokenType.Operator, this.at(2)) );
				this.advance();

			} else if ( ("+-*/%^<>=").includes(this.at()) ) {
				list.push( new Token(TokenType.Operator, this.at()) );
			} else if ( (".,:;&|!").includes(this.at()) ) {
				switch (this.at()) {
					case ".": list.push( new Token(TokenType.Dot) ); break;
					case ",": list.push( new Token(TokenType.Comma) ); break;
					case ":": list.push( new Token(TokenType.Colon) ); break;
					case ";": list.push( new Token(TokenType.Semicolon) ); break;
					case "&": list.push( new Token(TokenType.Ampersand) ); break;
					case "|": list.push( new Token(TokenType.Pipe) ); break;
					case "!": list.push( new Token(TokenType.Not) ); break;
				}
			}

			this.advance();
		}

		return list;
	}
}