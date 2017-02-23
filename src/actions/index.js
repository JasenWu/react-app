/**
 * Created by gellert on 2017/2/16.
 */
export const IS_LOGIN = "IS_LOGIN"

export function isLogin(boolean) {
    return {type: IS_LOGIN, boolean}
}
