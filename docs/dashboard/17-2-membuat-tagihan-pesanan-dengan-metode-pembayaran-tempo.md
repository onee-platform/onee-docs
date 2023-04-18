---
title: 17.2 Membuat Tagihan Pesanan dengan Metode Pembayaran Tempo
sidebar_label: 17.2 Membuat Tagihan Pesanan dengan Metode Pembayaran Tempo
---
L﻿angkah pertama untuk penggunaan pembayaran tempo adalah: 

1. P﻿elanggan harus menentukan limit hutang yang ingin digunakan.
2. M﻿asukan limit hutang di menu pelanggan ( lihat [disini](https://onee.netlify.app/dashboard/menambahkan-pelanggan-baru-manual/) ).
3. L﻿imit hutang yang nominalnya kecil tidak bisa digunakan untuk pesanan yang jumlahnya besar.

Nominal limit hutang pelanggan tidak akan berubah o﻿tomatis, karena sifatnya input manual, yang bisa berubah hanya kolom **Total Hutang saat ini**, kolom ini bisa bertambah dan berkurang secara otomatis ketika pelanggan sudah menggunakannya.

B﻿erikut dibawah ini contoh case: 

#### 1﻿7.2.1 Pelanggan melakukan pembelian barang dengan cara DP dan juga Tempo dengan Limit Hutang Rp. 5.000.000,-

1. L﻿angkah awal, Anda buat pesanan seperti biasa > kemudian Buat Pesanan > lalu Buat Tagihan.

   ![](/img/17.2.1-buat-tagihan-dengan-dp-dan-tempo.png)
2. Pada pembayaran pertama, Anda bisa memilih berapa persen untuk DP atau Anda juga bisa ketik manual di kolom jumlah pembayaran / tagihan yang akan di buat, kemudian pilih metode pembayarannya > buat tagihan.

   ![](/img/17.2.1-pilih-dp.png)
3. K﻿etika sudah di buat tagihan, maka pelanggan akan menerima notif pesan whatsApp dari onee untuk melakukan pembayaran dengan status pesanan unpaid. Dan tunggu hingga pelanggan melakukan pembayaran.
4. J﻿ika pelanggan sudah bayar, Anda bisa buka kembali pesanannya, kemudian klik tombol konfirmasi penerimaan.
5. S﻿elanjutnya, jika DP sudah dibayarkan oleh pelanggan dan status pesanan sudah berubah menjadi Partial_Paid, Anda sudah bisa langsung buat tagihan untuk pembayaran ke dua ( tempo ). 

   \-﻿ Klik buat tagihan > pilih metode pembayaran **Hutang** > pilih tempo yang telah di sediakan atau Anda bisa tentukan tanggal sendiri dengan cara klik gambar kalender di kolom tsb > kemudian buat tagihan.

   ![](/img/17.2.1-buat-tagihan-tempo.png)
6. K﻿etika Anda telah berhasil membuat tagihan tempo, maka status pesanan langsung di buat PAID, agar Anda bisa mengirimkan barang pesanan ke pelanggan, tetapi untuk status pembayarannya tetap di Partial_Paid, yang artinya pelanggan masih mempunyai hutang dan harus dilunasi sesuai dengan tempo yang telah di tentukan.