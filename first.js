import * as s from "./second";
var First = (function () {
    function First() {
    }
    First.prototype.do = function () {
        s.fct();
        console.log("first");
    };
    return First;
}());
export { First };
;
s.fct();
