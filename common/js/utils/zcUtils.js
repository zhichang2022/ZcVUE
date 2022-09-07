function strToDate(str){
    return new Date(str.replace(/-/g,"/"))
}

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // ��
        "y+": date.getFullYear().toString(),        // ��
        "m+": (date.getMonth() + 1).toString(),     // ��
        "d+": date.getDate().toString(),            // ��
        "H+": date.getHours().toString(),           // ʱ
        "M+": date.getMinutes().toString(),         // ��
        "S+": date.getSeconds().toString()          // ��
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}

Date.prototype.format = function (fmt) {
    return dateFormat(fmt, this);
}

//对象序列化

!function (A, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define &&
    define.amd ? define(e) : (A = "undefined" != typeof globalThis ? globalThis : A || self).ZcUtil = e()
}(this, function () {
    function u() {
    }

    function deepClone (obj) {
        //判断拷贝的obj是对象还是数组
        var objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") { //obj不能为空，并且是对象或者是数组 因为null也是object
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") { //obj里面属性值不为空并且还是对象，进行深度拷贝
                        objClone[key] = deepClone(obj[key]); //递归进行深度的拷贝
                    } else {
                        objClone[key] = obj[key]; //直接拷贝
                    }
                }
            }
        }
        return objClone;
    }

    u.prototype.transToStr = function (obj) {
        let name = "_SO";
        let result = "";
        result = result + "(function(){ let " + name + " = {};";

        function serializeInternal(o, path) {
            for (let p in o) {
                var value = o[p];
                if (typeof value != "object") {
                    if (typeof value == "string") {
                        result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "] = " + "\"" + value.replace(/\"/g, "\\\"") + "\"" + ";";
                    } else {
                        result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "] = " + value + ";";
                    }
                } else {
                    if (value instanceof Array) {
                        result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]" + "=" + "new Array();";
                        serializeInternal(value, path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]");
                    } else {
                        result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]" + "=" + "new Object();";
                        serializeInternal(value, path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]");
                    }
                }
            }
        }

        serializeInternal(obj, name);
        result = result + "\n return " + name + ";})()"
        return result;
    }
    u.prototype.transToObj = function (str, isArray) {
        if (!isArray) {
            return eval(str)
        } else {
            return this.ObjToArray(eval(str))
        }
    }
    u.prototype.ObjToArray = function (obj) {
        let arr = [];
        for (let n in obj) {
            arr.push(obj[n])
        }
        return arr;
    }

    //使用递归实现深拷贝
    u.prototype.deepClone = function( obj ){
        return deepClone(obj)
    }


    return new u();
});

