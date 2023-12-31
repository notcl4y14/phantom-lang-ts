"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
var token_1 = require("./token");
var Lexer = /** @class */ (function () {
    function Lexer(code) {
        this.code = code;
        this.position = -1;
        this.advance();
    }
    // ---------------------------------------------------------------------------------------------
    Lexer.prototype.getCode = function () {
        return this.code;
    };
    Lexer.prototype.getPosition = function () {
        return this.position;
    };
    Lexer.prototype.isEof = function () {
        return this.getPosition() >= this.getCode().length;
    };
    // ---------------------------------------------------------------------------------------------
    Lexer.prototype.at = function (range) {
        if (range === void 0) { range = 1; }
        if (range == 1) {
            return this.getCode()[this.getPosition()];
        }
        return this.getCode().substr(this.getPosition(), range);
    };
    Lexer.prototype.advance = function (delta) {
        if (delta === void 0) { delta = 1; }
        this.position += 1;
    };
    // ---------------------------------------------------------------------------------------------
    Lexer.prototype.lexerize = function () {
        var list = [];
        while (!this.isEof()) {
            if ((" \t\r\n").includes(this.at())) {
                // Skip
            }
            else if (["+=", "-=", "*=", "/=", "%=", "^=", "<=", ">=", "==", "!="].includes(this.at(2))) {
                list.push(new token_1.Token(token_1.TokenType.Operator, this.at(2)));
                this.advance();
            }
            else if (("+-*/%^<>=").includes(this.at())) {
                list.push(new token_1.Token(token_1.TokenType.Operator, this.at()));
            }
            else if ((".,:;&|!").includes(this.at())) {
                switch (this.at()) {
                    case ".":
                        list.push(new token_1.Token(token_1.TokenType.Dot));
                        break;
                    case ",":
                        list.push(new token_1.Token(token_1.TokenType.Comma));
                        break;
                    case ":":
                        list.push(new token_1.Token(token_1.TokenType.Colon));
                        break;
                    case ";":
                        list.push(new token_1.Token(token_1.TokenType.Semicolon));
                        break;
                    case "&":
                        list.push(new token_1.Token(token_1.TokenType.Ampersand));
                        break;
                    case "|":
                        list.push(new token_1.Token(token_1.TokenType.Pipe));
                        break;
                    case "!":
                        list.push(new token_1.Token(token_1.TokenType.Not));
                        break;
                }
            }
            this.advance();
        }
        return list;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
