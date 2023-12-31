"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_1 = require("./lang/lexer");
var main = function () {
    var lexer = new lexer_1.Lexer("+-*/%^ += -= *= /= %= ^= < > = <= >= == != .,:;&|!");
    var tokens = lexer.lexerize();
    console.log(tokens);
};
main();
