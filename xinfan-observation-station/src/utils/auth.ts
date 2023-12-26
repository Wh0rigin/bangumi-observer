import Cookies from 'js-cookie';


const TokenKey = 'VL7SPrFYAdstXEiuzDmQRCIwrBLEeKTzFlGWsWnl'

export function getToken() {
//   return Cookies.get(TokenKey)
    return TokenKey
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}