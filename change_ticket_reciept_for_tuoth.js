<script>
const crypto = require('crypto');

// 暗号化する文字列
const plaintext = 'receiptNo=0123&patientId=09851155';

// 暗号化パラメータ
const algorithm = 'aes-128-cbc';
const key = 'EeLXEKtNzwnYQHiM'; // 16バイト (128ビット)
const iv = '4SFRQgEcXtXYEh96';  // 16バイト (128ビット)

// SHIFT-JISエンコーディングに変換
const iconv = require('iconv-lite');
const shiftJisBuffer = iconv.encode(plaintext, 'Shift_JIS');

// 暗号化
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(shiftJisBuffer);
encrypted = Buffer.concat([encrypted, cipher.final()]);

// Base64エンコード
const encryptedBase64 = encrypted.toString('base64');

console.log('暗号化結果 (Base64):', encryptedBase64);
</script>
