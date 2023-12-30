enum TokenType {
	Operator,

	Number,
	String,
	Identifier,
	Keyword,
	Literal,

	Dot,
	Comma,
	Colon,
	Semicolon,
	Not,
	Ampersand,
	Pipe,

	Comment,
	EOF,
}

class Token {
	public type: TokenType;
	public value: any;

	public constructor(type: TokenType, value: any) {
		this.type = type;
		this.value = value;
	}

	public matches(type: TokenType, value: any = null): boolean {
		if (!value) {
			return this.type == type;
		}

		return this.type == type && this.value == value;
	}

	public string(): string {
		return `Token { type: ${this.type}, value: ${this.value} }`;
	}
}

module.exports = { TokenType, Token };