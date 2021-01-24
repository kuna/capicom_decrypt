/**
 * Script usage:
 * 
 * javascript:(!function(){var s=document.createElement("script");s.id="iidxme";s.type="text/javascript";s.src="//iidx.me/loader.js";document.head.appendChild(s);}());
 * javascript:$.getScript('//iidx.me/loader.js');
 */

function loadScript(src) {
    var script = document.createElement('script');
    script.onload = function () {};
    script.src = src;
    document.head.appendChild(script);
}

loadScript('misc/rc2.js');
loadScript('misc/sha1.js');
loadScript('misc/enc-utf16-min.js');
loadScript('capicom.js');