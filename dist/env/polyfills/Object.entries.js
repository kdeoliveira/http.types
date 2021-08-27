"use strict";
if (!global.Object.entries) {
    global.Object.entries = function (object) {
        return Object.keys(object).map(function (key) { return [key, object[key]]; });
    };
}
//# sourceMappingURL=Object.entries.js.map