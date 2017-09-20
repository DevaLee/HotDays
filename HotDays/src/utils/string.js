/**
 * Created by ritamashin on 2017/9/20.
 */

/*
*  拼接字符串
* */
export function lpad(str, len, pad = '') {
    str = str + '';
    while (str.length < len){
        str = pad + str;
    }
    return str
}
