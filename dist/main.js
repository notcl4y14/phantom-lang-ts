var _a = require("./lang/token"), TokenType = _a.TokenType, Token = _a.Token;
var main = function () {
    console.log("Hello World!");
    var token = new Token(TokenType.String, "Hello World!");
    console.log(token.string());
    console.log(token);
};
main();
