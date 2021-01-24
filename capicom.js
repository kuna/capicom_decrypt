function CapicomDecrypter() {
    this.secret = '';
    this.Content = '';
    var self = this;

    this.SetSecret = function (val, _dummy) {
        self.secret = val;
    }

    /*
    function ascii_to_hexa(str)
    {
        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n ++) 
        {
            var hex = Number(str.charCodeAt(n)).toString(16);
            var s = hex.toString();
            if (s.length < 2) s = '0' + s;
            arr1.push(s);
        }
        return arr1.join('');
    }
    */

    function createkey (passwd, salt) {
        var hashobj = CryptoJS.algo.SHA1.create();
        hashobj.update(CryptoJS.enc.Utf16LE.parse(passwd));
        hashobj.update(CryptoJS.enc.Latin1.parse(salt));
        var key = hashobj.finalize();
        return key.toString().slice(0, 32);
    }

    this.Decrypt = function (b64) {
        // b64decode
        var blob = atob(b64);
        var init_vector = blob.slice(56 + 2, 56 + 2 + 8);
        var salt = blob.slice(66 + 2, 66 + 2 + 16);
        var content = blob.slice(84 + 4);
        var passwd = self.secret;
        var key = createkey(passwd, salt);
        //console.log(key);
        //console.log('iv: ' + ascii_to_hexa(init_vector));

        var decrypt_content_raw = CryptoJS.RC2.decrypt(
            {
                ciphertext: CryptoJS.enc.Latin1.parse(content)
            },
            CryptoJS.enc.Hex.parse(key),
            {
                iv: CryptoJS.enc.Latin1.parse(init_vector), effectiveKeyBits: 128,
                mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 /* = PKCS5 */
            });
        var decrypt_content = decrypt_content_raw.toString(CryptoJS.enc.Utf16LE);
        self.Content = decrypt_content;
    }
}

// CAPICOM_SECRET_TYPE enumeration.
CAPICOM_SECRET_PASSWORD = 0;

document.capicom = new CapicomDecrypter();