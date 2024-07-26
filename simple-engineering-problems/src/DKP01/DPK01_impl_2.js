export default function revert(str) {
  let r = ""
  let i = str.length - 1
  while (i >= 0) {
    r += str[i]; i--;
  }
  return r
}
/**
 * Aqui eu to varrendo de traz pra frente e concatentando em uma string
 */
