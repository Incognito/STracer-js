var STracer = {};
var report = require('./lib/report');
var report = require('./lib/computeStacktrace');

var _slice = [].slice;

exports.report = report;

/**
 * STracer.wrap: Wrap any function in a try-catch reporter
 * Example: var func = TraceKit.wrap(func);
 * Example: TraceKit.wrap(function(bar){return 1 + bar})(1);
 *
 * @param {Function} func Function to be wrapped
 * @return {Function} The wrapped func
 */
exports.wrap = function wrap(func) {
    return (function wrapped() {
        try {
            return func.apply(this, arguments);
        } catch (e) {
            TraceKit.report(e);
            throw e;
        }
    });
};
