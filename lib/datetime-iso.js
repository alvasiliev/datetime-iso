'use strict';

function local(date) {
    if (!date) date = new Date();
    let y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        mi = date.getMinutes(),
        s = date.getSeconds(),
        ms = date.getMilliseconds();
    if (m < 10) m = '0' + m;
    if (d < 10) d = '0' + d;
    if (h < 10) h = '0' + h;
    if (mi < 10) mi = '0' + mi;
    if (s < 10) s = '0' + s;
    if (ms < 10) ms = '00' + ms; else if (ms < 100) ms = '0' + ms;
    return `${y}-${m}-${d}T${h}:${mi}:${s}.${ms}`;
};

function utc(date) {
    if (!date) date = new Date();
    let y = date.getUTCFullYear(),
        m = date.getUTCMonth() + 1,
        d = date.getUTCDate(),
        h = date.getUTCHours(),
        mi = date.getUTCMinutes(),
        s = date.getUTCSeconds(),
        ms = date.getUTCMilliseconds();
    if (m < 10) m = '0' + m;
    if (d < 10) d = '0' + d;
    if (h < 10) h = '0' + h;
    if (mi < 10) mi = '0' + mi;
    if (s < 10) s = '0' + s;
    if (ms < 10) ms = '00' + ms; else if (ms < 100) ms = '0' + ms;
    return `${y}-${m}-${d}T${h}:${mi}:${s}.${ms}`;
};

module.exports = {
    local: local,
    utc: utc
};
