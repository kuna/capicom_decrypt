Capicom javascript decryptor
============================

### What is this?

This source simulates ```document.capicom``` module, based on [CryptoJS with RC2](https://github.com/tomyun/crypto-js) without ActiveX.

### Usage

Enter below to URL or Developer console. Don't forget to write ***javascript:*** manually after paste!!

```
javascript:(!function(){var s=document.createElement("script");s.id="_capicom";s.type="text/javascript";s.src="https://kuna.github.io/capicom_decrypt/loader.js";document.head.appendChild(s);}());
```

Otherwise, If you use booklet(Ctrl+Shift+B), you can ***drag above script to booklet***, then click it when you need to activate capicom module.

You may see success message on development console of web browser.