/**
 * Script usage:
 * 
 * javascript:(!function(){var s=document.createElement("script");s.id="_capicom";s.type="text/javascript";s.src="https://kuna.github.io/capicom_decrypt/loader.js";document.head.appendChild(s);}());
 * javascript:$.getScript('https://kuna.github.io/capicom_decrypt/loader.js');
 */

function loadScript(src) {
    var script = document.createElement('script');
    script.onload = function () {};
    script.src = src;
    document.head.appendChild(script);
}

loadScript('https://kuna.github.io/capicom_decrypt/misc/rc2.js');
loadScript('https://kuna.github.io/capicom_decrypt/misc/sha1.js');
loadScript('https://kuna.github.io/capicom_decrypt/misc/enc-utf16-min.js');
loadScript('https://kuna.github.io/capicom_decrypt/capicom.js');