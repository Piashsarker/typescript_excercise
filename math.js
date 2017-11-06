var MathModule;
(function (MathModule) {
    var Math = /** @class */ (function () {
        function Math() {
        }
        Math.prototype.add = function (n1, n2) {
            return n1 + n2;
        };
        Math.prototype.sub = function (n1, n2) {
            if (n1 > n2) {
                return n1 - n2;
            }
            return n2 - n1;
        };
        return Math;
    }());
    MathModule.Math = Math;
})(MathModule || (MathModule = {}));
