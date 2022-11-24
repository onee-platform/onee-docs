---
title: 17. Membuat Tagihan Pesanan
sidebar_label: 17. Membuat Tagihan Pesanan
---
1. P﻿ada menu Pesanan > Daftar Pesanan > Tab Semua Pesanan > klik pesanan yang ingin dibuat tagihan.

   ![](/img/17.-status-pesanan-draft.png)
2. Tampilan detail pesanan > klik *button* Buat Tagihan.

   ![](/img/17.1-buat-tagihan-pesanan.png)

   ![](/img/17.2-buat-tagihan-tampilan-ketika-klik-buat-tagihan.png)

   \-﻿ Pembayaran Online: jika menggunakan metode pembayaran online Anda hanya perlu menunggu status pembayaran terupdate otomatis. Dan sudah bisa langsung disiapkan pesanan tanpa harus konfirmasi penerimaan.

   \-﻿ Bank Transfer: Pembayaran akan dilakukan oleh pembeli dengan cara transfer ke rekening bank yang terdaftar. Metode ini membutuhkan verifikasi manual ( pengecekan saldo mutasi bank ), dan perlu melakukan konfirmasi penerimaan agar status pembayaran menjadi **PAID**. Anda juga bisa menambahkan daftar Bank Transfer [disini](https://onee.netlify.app/dashboard/rekening-bank).

   \-﻿ Cash / Lain - Lain: Pastikan Anda telah menerima pembayaran untuk pesanan ini.\
      Pesanan akan langsung dianggap lunas dan dapat di proses untuk pengiriman / pickup.
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