---
title: 9. Integrasi - Aplikasi Midtrans
sidebar_label: 9. Integrasi - Aplikasi Midtrans
---
Onee.id menyediakan aplikasi Midtrans sebagai solusi payment gateway Anda. Jika ingin menggunakannya maka bisa langsung menghubungkannya dengan cara sebagai berikut: 

1. L﻿ogin Midtrans.

   \- S﻿ebelum Anda membuka menu Integrasi > Aplikasi pada dashboard.onee.id, langkah awal yang harus dilakukan adalah login ke dalam midtrans.com bagi Anda yang sudah mempunyai akun. Dan bagi Anda yang belum mempunyai akun, maka bisa register terlebih dahulu di <https://dashboard.midtrans.com/register>

   \-﻿ Ketika Anda sudah berhasil login, pada tampilan dashboard midtrans bagian **Environment** terdapat 2 pilihan, ada *Production* ( untuk development ) dan ada *Sandbox* ( untuk Testing ). Pilih sesuai dengan kebutuhan Anda.

   \-﻿ Selanjutnya Anda bisa langsung klik menu *Settings* -> *Access Key*

   ![](/img/midtrans-update-capture-access-key.png)
2. Di halaman tersebut akan menampilkan *Merchant ID, Server Key* & *Client Key* untuk Anda copy dan tempel di menu Integrasi Aplikasi pada [dashboard.onee.id](dashboard.onee.id), lakukan seperti gambar dibawah kemudian simpan, maka aplikasi midtrans akan terhubung.

   ![](/img/9.1-integrasi-aplikasi.png)
3. D﻿an langkah terakhir untuk integrasi aplikasi midtrans, Anda buka kembali dashboard midtrans, kemudian masuk ke menu *Settings* -> *Payment* -> pilih/klik *Notification URL*.

   ![](/img/midtrans-update-notification-payment-1.png)

   K﻿emudian masukan link <https://midtrans.onee.id> pada kolom Payment notification URL ( Notification URL endpoint -> klik *save.*

   ![](/img/midtrans-update-notification-payment.png)
4. S﻿elesai