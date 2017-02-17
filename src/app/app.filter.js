"use strict";
var core_1 = require("@angular/core");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (sLists, field, value) {
        if (!sLists)
            return [];
        return sLists.filter(function (it) { return it[field] == value; });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    }),
    core_1.Injectable()
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=app.filter.js.map