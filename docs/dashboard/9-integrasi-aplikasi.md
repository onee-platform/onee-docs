---
title: 9. Integrasi - Aplikasi
sidebar_label: 9. Integrasi - Aplikasi
---
K﻿ami menyediakan aplikasi Midtrans sebagai solusi payment gateway Anda. Jika ingin menggunakannya maka bisa langsung menghubungkannya dengan cara sebagai berikut: 

1. L﻿ogin Midtrans.

   \- S﻿ebelum Anda membuka menu Integrasi > Aplikasi pada dashboard.onee.id, langkah awal yang harus dilakukan adalah login ke dalam midtrans.com bagi Anda yang sudah mempunyai akun. Dan bagi Anda yang belum mempunyai akun, maka bisa register terlebih dahulu di <https://dashboard.midtrans.com/register>

   \-﻿ Kemudian, ketika Anda sudah berhasil login, pada bagian Environment terdapat 2 pilihan, ada Production ( untuk development ) dan ada Sandbox ( untuk Testing ). 

   D﻿isini kami memakai Sandbox untuk testing, lalu buka halaman  ﻿<https://dashboard.sandbox.midtrans.com/settings/config_info>

   ![](/img/9.-integrasi-aplikasi-midtrans-sandbox-testing-.png)
2. Di halaman tersebut akan menampilkan Merchant ID, Server Key & Client Key untuk Anda copy dan tempel di menu Integrasi > Aplikasi pada [dashboard.onee.id](https://dashboard.onee.id)

   ![](/img/9.1-integrasi-aplikasi.png)

   J﻿ika sudah maka klik simpan, dan midtrans akan terhubung.

   L﻿angkah selanjutnya, buka halaman <https://dashboard.sandbox.midtrans.com/settings/vtweb_configuration> kemudian masukan link <https://api.onee.id/midtrans/notification> pada kolom Payment Notification URL*.

   ![](/img/9.2-integrasi-payment-notif-midtrans.png)