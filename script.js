
var wid = 101
var hei = 31
function dec() {
    wid--
    hei--
    document.getElementById("mainFrame").style.backgroundSize = `${wid}% ${hei}vh`
}
function inc() {
    wid++
    hei++
    document.getElementById("mainFrame").style.backgroundSize = `${wid}% ${hei}vh`
}
function ok() {
    wid = 101
    hei = 30
    document.getElementById("mainFrame").style.backgroundSize = `${wid}% ${hei}vh`
}
function up() {
    var promp = prompt("Paste Url of The Photo")
    promp = "url(" + promp + ")"
    document.getElementById("mainFrame").style.background = promp
    document.getElementById("mainFrame").style.backgroundRepeat = `no-repeat`
    wid = 101
    hei = 30
    document.getElementById("mainFrame").style.backgroundSize = `${wid}% ${hei}vh`
}
