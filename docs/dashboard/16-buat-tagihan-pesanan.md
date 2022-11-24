---
title: 17. Membuat Tagihan Pesanan
sidebar_label: 17. Membuat Tagihan Pesanan
---
1. D

   ![](/img/17.-status-pesanan-draft.png)
2. P﻿ilih metode pembayaran.

   ![](/img/16.-tampilan-ketika-klik-buat-tagihan.png)

   \-﻿ Pembayaran Online: pembayaran akan dilakukan dengan menggunakan third party *midtrans,* untuk pilihan pembayarannya bisa di settings pada backend *midtrans.*

   \-﻿ Bank Transfer: Pembayaran akan dilakukan oleh pembeli dengan cara transfer ke rekening bank yang terdaftar. Metode ini membutuhkan verifikasi manual ( pengecekan saldo mutasi bank ). Untuk menambahkan daftar Bank Transfer Anda bisa membuatnya [disini](https://onee.netlify.app/dashboard/rekening-bank).

   \-﻿ Cash / Lain - Lain: Pastikan Anda telah menerima pembayaran untuk pesanan ini.\
   Pesanan akan langsung dianggap lunas dan dapat di proses untuk pengiriman / pickup.

   K﻿etika sudah ditentukan metode pembayaran, maka status pesanan berubah menjadi **UNPAID.**

   ![](/img/16.-pesanan-unpaid.png)
3. K﻿onfirmasi Penerimaan.

   L﻿akukan konfirmasi penerimaan, jika pembayaran tersebut menggunakan metode Bank Transfer.

   ![](/img/16.-konfirmasi-penerimaan.png)

   k﻿lik Button Konfirmasi Penerimaan, kemudian atur Tanggal Terima dan Konfirmasi jumlah pembayaran yang telah diterima atau bisa langsung klik button centang jika penerimaan yang di terima sesuai dengan tagihan. Lalu klik Konfirmasi Penerimaan, dan status pesanan berubah menjadi **PAID**.
4. K﻿etika status pesanan sudah PAID, maka sudah bisa untuk disiapkan pesanan pelanggan, dan pesanan dengan status yang sudah PAID akan masuk ke tab Pesanan Baru untuk bisa di cetak label.

N﻿OTES: 

Status pembayaran dari pesanan ini:\
**PENDING**: Pembayaran belum diterima.\
**PARTIAL_PAID**: Pembayaran sudah diterima sebagian (DP / Menunggu sisa pembayaran).\
**SETTLED**: Pembayaran untuk pesanan ini sudah diterima secara penuh.\
**CANCELLED**: Pembayaran untuk pesanan ini dibatalkan.\
**REFUNDED**: Pembayaran untuk pesanan ini dikembalikan sebagai saldo point.