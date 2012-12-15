var DefaultFunctions = (function () {
    function DefaultFunctions() { }
    DefaultFunctions.range = function range(low, high, step) {
        if (typeof step === "undefined") { step = 1; }
        var out = [];
        var current = low;
        while(current <= high) {
            out.push(current);
            current += step;
        }
        return out;
    }
    DefaultFunctions.cycle = function cycle(list, index) {
        return list[index % list.length];
    }
    DefaultFunctions.constant = function constant(name) {
        throw (new Error("Not implemented"));
    }
    DefaultFunctions.random = function random(values) {
        if(values === undefined || values === null) {
            return Math.round(Math.random() * 99999999);
        }
        if((values.prototype == Array.prototype) || (values.prototype == String.prototype)) {
            return values[Math.round(Math.random() * (values.length - 1))];
        }
        return Math.round(Math.random() * values);
    }
    DefaultFunctions.attribute = function attribute(object, method, arguments) {
        throw (new Error("Not implemented"));
    }
    DefaultFunctions.block = function block(name) {
        throw (new Error("Not implemented"));
    }
    DefaultFunctions.parent = function parent() {
        throw (new Error("Not implemented"));
    }
    DefaultFunctions.dump = function dump(object) {
        return JSON.stringify(object);
    }
    DefaultFunctions.date = function date(date, timezone) {
        throw (new Error("Not implemented"));
    }
    DefaultFunctions.template_from_string = function template_from_string(template) {
        throw (new Error("Not implemented"));
    }
    return DefaultFunctions;
})();
exports.DefaultFunctions = DefaultFunctions;