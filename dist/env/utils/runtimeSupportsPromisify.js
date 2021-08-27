"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runtimeSupportsPromisify = (function () {
    if (process &&
        process.release &&
        process.release.name === 'node' &&
        process.versions &&
        typeof process.versions.node === 'string') {
        var nodeMajor = process.versions.node
            .split('.', 1)
            .map(function (segment) { return parseInt(segment, 10); })[0];
        if (nodeMajor >= 8) {
            return true;
        }
        return false;
    }
    // If we haven't matched any of the above criteria, we'll remain unsupported
    // for this mysterious environment until a pull-request proves us otherwise.
    return false;
})();
exports.default = runtimeSupportsPromisify;
//# sourceMappingURL=runtimeSupportsPromisify.js.map