// The encoding/decoding was taken from http://www.mvjantzen.com/blog/?p=1005
// Should make my own code to be able to script more stuff (spaces and other symbols) and make it case sensitive.

var key = "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare";

function encodeStr(uncoded) {
    uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g,"");
    var coded = "";
    var chr;
    for (var i = uncoded.length - 1; i >= 0; i--) {
        chr = uncoded.charCodeAt(i);
        coded += (chr >= 65 && chr <= 90) ? key.charAt(chr - 65 + 26*Math.floor(Math.random()*2)) : String.fromCharCode(chr);
    }
    return encodeURIComponent(coded);
}

function decodeStr(coded) {
    coded = decodeURIComponent(coded);
    var uncoded = "";
    var chr;
    for (var i = coded.length - 1; i >= 0; i--) {
        chr = coded.charAt(i);
        uncoded += (chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z") ? String.fromCharCode(65 + key.indexOf(chr) % 26) : chr;
    }
  return uncoded;
}

// ---

function showSecretEmail(){
    var elements = document.getElementsByClassName('secretMailto')
    for (var i = 0; i < elements.length; i++) {
        var secretEmail = elements[i].getAttribute("data-secret")
        var email = decodeStr(secretEmail).toLowerCase()
        elements[i].href = "mailto:" + email
        elements[i].innerText = email
    }
}

function showSecretSpan(){
    var elements = document.getElementsByClassName('secretSpanText')
    for (var i = 0; i < elements.length; i++) {
        var secretData =  elements[i].getAttribute("data-secret")
        var realData = decodeStr(secretData).toLowerCase()
        elements[i].innerText = realData
    }
}

