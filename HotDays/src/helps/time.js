/**
 * Created by ritamashin on 2017/9/20.
 */

import Utils from '../utils'

export function durationText(seconds) {
    let minutes = Math.round(seconds / 60);
    seconds = Math.round(seconds % 60)
    return Utils.string.lpad(minutes, 2, 0) + ':' + Utils.string.lpad(minutes, 2, '0')
}