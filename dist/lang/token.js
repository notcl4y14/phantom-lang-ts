var TokenType;
(function (TokenType) {
    TokenType[TokenType["Operator"] = 0] = "Operator";
    TokenType[TokenType["Number"] = 1] = "Number";
    TokenType[TokenType["String"] = 2] = "String";
    TokenType[TokenType["Identifier"] = 3] = "Identifier";
    TokenType[TokenType["Keyword"] = 4] = "Keyword";
    TokenType[TokenType["Literal"] = 5] = "Literal";
    TokenType[TokenType["Dot"] = 6] = "Dot";
    TokenType[TokenType["Comma"] = 7] = "Comma";
    TokenType[TokenType["Colon"] = 8] = "Colon";
    TokenType[TokenType["Semicolon"] = 9] = "Semicolon";
    TokenType[TokenType["Not"] = 10] = "Not";
    TokenType[TokenType["Ampersand"] = 11] = "Ampersand";
    TokenType[TokenType["Pipe"] = 12] = "Pipe";
    TokenType[TokenType["Comment"] = 13] = "Comment";
    TokenType[TokenType["EOF"] = 14] = "EOF";
})(TokenType || (TokenType = {}));
var Token = /** @class */ (function () {
    function Token(type, value) {
        this.type = type;
        this.value = value;
    }
    Token.prototype.matches = function (type, value) {
        if (value === void 0) { value = null; }
        if (!value) {
            return this.type == type;
        }
        return this.type == type && this.value == value;
    };
    Token.prototype.string = function () {
        return "Token { type: ".concat(this.type, ", value: ").concat(this.value, " }");
    };
    return Token;
}());
module.exports = { TokenType: TokenType, Token: Token };
