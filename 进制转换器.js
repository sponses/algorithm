const hash = new Map()
const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'
for (let i = 0, len = str.length; i < len; i++) {
  hash.set(i, str[i])
}
/**
 * 二进制、四进制、八进制、
 * 十六进制、三十二进制、
 * 六十四进制 转十进制
 * @param {number} num
 * @param {number} base
 * @return {number} ans
 */
function convert_2_10(num, base) {
  let ans = 0
  while (num) {}
  return ans
}

/**
 * 二进制转四进制、八进制、十六进制、
 * 三十二进制、六十二进制
 * @param {number} num
 * @param {number} base
 * @return {string}
 */
function conver_2_8163264(num, base) {
  let ans = ''
  let gap = -1
  while (base) {
    base >>= 1
    gap++
  }
  while (num) {
    let gap_temp = gap
    let cnt = 0
    let temp = 0
    while (num && gap_temp) {
      temp += (num & 1) << cnt++
      num >>= 1
      gap_temp--
    }
    ans = hash.get(temp) + ans
  }
  return ans
}

/**
 * 十进制转二进制、四进制、八进制
 * 十六进制、三十二进制、六十二进制、
 * 六十四进制
 * 结果用字符串表示
 * @param {number} num
 * @param {number} base
 * @return {string}
 */
function convert_10_248163264(num, base) {
  let ans = ''
  while (num) {
    ans = hash.get(num % base) + ans
    num = Math.floor(num / base)
  }
  return ans
}
