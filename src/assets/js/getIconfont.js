export const getIconFont = (str) => {
    let div = document.createElement('div')
    div.className = 'iconfont'
    div.innerHTML = str
    const output = div.textContent
    div = null
    return output
}