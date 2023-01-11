const setCookie = (key, value, days = 1) => {
    const date = new Date()
    date.setHours(24 * days - date.getTimezoneOffset() / 60, 0, 0, 0)
    const expires = date.toUTCString()
    document.cookie =  `${key}=${value};expires=${expires};path=/`
}

const getCookie = (key) => {
    const value = document.cookie
        .split(';')
        .find((i) => i.trim().startsWith(key+'='))
    if (!!value) {
        return value.trim().substring(key.length + 1)
    }

    return null
}

// 함수명을 직접 export 처리 = 사용할때 함수명을 정확하게 지정해서 import 할것.
export { setCookie, getCookie }