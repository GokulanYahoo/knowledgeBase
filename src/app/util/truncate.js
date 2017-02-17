"use strict";
var core_1 = require("@angular/core");
var StringTruncatePipe = (function () {
    function StringTruncatePipe() {
    }
    StringTruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 13) : 13;
        return value.length > limit ? value.substring(0, limit) : value;
    };
    return StringTruncatePipe;
}());
StringTruncatePipe = __decorate([
    core_1.Pipe({ name: 'stringTruncate' })
], StringTruncatePipe);
exports.StringTruncatePipe = StringTruncatePipe;
//# sourceMappingURL=truncate.js.map