Capicom javascript decryptor
============================

### What is this?

This source simulates ```document.capicom``` module, based on [CryptoJS with RC2](https://github.com/tomyun/crypto-js) without ActiveX.

### Usage

```
javascript:(!function(){var s=document.createElement("script");s.id="_capicom";s.type="text/javascript";s.src="https://kuna.github.io/capicom_decrypt/loader.js";document.head.appendChild(s);}());
```

You may see success message on development console of web browser.