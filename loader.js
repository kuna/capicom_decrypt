/**
 * Script usage:
 * 
 * javascript:(!function(){var s=document.createElement("script");s.id="_capicom";s.type="text/javascript";s.src="https://kuna.github.io/capicom_decrypt/loader.js";document.head.appendChild(s);}());
 * javascript:$.getScript('https://kuna.github.io/capicom_decrypt/loader.js');
 */

function loadScript(src, onload) {
    var script = document.createElement('script');
    if (onload)
        script.onload = onload;
    script.src = src;
    document.head.appendChild(script);
}

// remove original capicom object
var capicom_elem = document.getElementById('capicom');
if (capicom_elem != undefined) {
    capicom_elem.parentNode.removeChild(capicom_elem);
    console.log("Capicom ActiveX module detected and removed ...");
}

loadScript('https://kuna.github.io/capicom_decrypt/misc/rc2.js', function () {
loadScript('https://kuna.github.io/capicom_decrypt/misc/sha1.js', function () {
loadScript('https://kuna.github.io/capicom_decrypt/misc/enc-utf16-min.js', function () {
loadScript('https://kuna.github.io/capicom_decrypt/capicom.js', function () {
    console.log("Capicom module successfully loaded.");
}); }); }); });