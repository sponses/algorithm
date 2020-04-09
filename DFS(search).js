/**
 * DFS
 * 在 搜索算法 中，该词常常指利用递
 * 归函数方便地实现暴力枚举的算法
 */

/**
 * 例题1
 * 把正整数 n 分解为 k 个不同的正整数，
 * 如 6=1+2+3，排在后面的数必须大于等
 * 于前面的数，输出所有方案。
 * @param {Number} n
 * @param {Number} k
 */
function dfs1(n, k) {
  const ans = []
  const has = []
  function dfs(remain, prev, k) {
    if (remain === 0 && k === 0) {
      ans.push([...has])
      return
    }
    if (remain <= 0 || remain <= prev || k <= 0) return
    for (let i = prev + 1; i <= n; i++) {
      if (remain - i < 0) return
      has.push(i)
      dfs(remain - i, i, k - 1)
      has.pop()
    }
  }
  dfs(n, 0, k)
  return ans
}

/**
 * 例题2
 * 输出自然数 1 到 n 所有不重复的排列，
 * 即 n 的全排列，要求所产生的任一数字序
 * 列中不允许出现重复的数字。
 * 输出由 1∼n 组成的所有不重复的
 * 数字数组
 * @param {Number} n
 */
function dfs2(n) {
  const ans = []
  const used = new Array(n + 1)
  used.fill(false)
  const has = []
  function dfs() {
    if (has.length === n) {
      ans.push([...has])
      return
    }
    for (let i = 1; i <= n; i++) {
      if (used[i]) continue
      used[i] = true
      has.push(i)
      dfs()
      used[i] = false
      has.pop()
    }
  }
  dfs()
  return ans
}
