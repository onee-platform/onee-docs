---
title: 12.1 Tambah Produk Secara Masal
sidebar_label: 12.1 Tambah Produk Secara Masal
---
A﻿nda juga bisa menambahkan produk secara masal dengan cara sebagai berikut: 

1. B﻿uka menu semua produk & jasa | klik *button* Tambah Masal. 

   ![](/img/12.1-button-tambah-masal.png)
2. K﻿lik button Download Excel untuk mengisi produk - produk. Maksimum produk yang dapat di upload dalam satu file excel, adalah 1.000 produk. 

   ![](/img/12.1-button-download-excel.png)



B﻿erikut cara mengisi produk di excel:

1. B﻿uka file excel yang baru saja di download. 
2. I﻿si produk sesuai dengan Field dan ketentuan dibawah ini:

   * **Harap Dikosongkan**: Abaikan kolom ini. Kolom ini akan berisi pesan jika ada kesalahan setelah kamu melakukan proses upload file.

     ( Field ini harus di *double* klik agar semua pesan error terlihat )
   * **ID Kategori**: Pilih ID kategori dari sheet Daftar Kategori. Pastikan Anda memilih kategori yang sesuai dengan produk Anda.
   * **N﻿ama Produk* ( Field ini wajib diisi )**: Masukan nama produk yang sesuai dengan barang yang dijual (*Free Text*).

     Nama harus berbeda untuk setiap produk, ya.
   * **D﻿eskripsi Produk**: ( Opsional )  Masukan deskripsi produk dengan lengkap dan jelas. 

     ( *Free Text* ) field ini bisa diketik angka ataupun huruf.
   * **S﻿KU Produk**: ( Opsional ) Masukan SKU Produk.
     SKU Produk biasanya berupa angka dan huruf tanpa spasi. SKU hanya berlaku untuk 1 produk ( SKU tidak boleh double ). 

     Jika SKU *double* maka akan muncul keterangan INVALID_SKU.
   * **H﻿arga (IDR)**: Masukkan harga produk dalam rupiah tanpa menggunakan koma dan titik.

     Field ini akan otomatis dibuat 0 jika kosong.
   * **H﻿arga Promo**: Masukkan harga promo dalam rupiah tanpa menggunakan koma dan titik.

     Field ini akan otomatis dibuat 0 jika kosong.
   * **H﻿PP**: Masukkan harga pokok penjualan dalam rupiah tanpa menggunakan koma dan titik.

     Field ini akan otomatis dibuat 0 jika kosong.
   * **S﻿tock**: Masukan jumlah stock dengan angka tanpa menggunakan koma dan titik 

     Field ini akan otomatis dibuat 0 jika kosong. 
   * **B﻿erat:** Masukan berat produk dengan angka tanpa menggunakan koma dan titik. 

     Field ini akan otomatis dibuat 0 jika kosong.
   * **S﻿atuan Berat:** Masukan satuan berat hanya dengan huruf **G / KG**. 

     Field ini akan otomatis dibuat satuan berat G (gram) jika kosong.
   * **K﻿ondisi Barang:** Masukan kata **NEW / USED** untuk menentukan kondisi barang.

     Field ini akan otomatis dibuat / default NEW jika kosong.
   * **P﻿reOrder?:** Masukan kata **YES / NO** jika barang PreOder.

     Field ini akan otomatis dibuat / default NO jika kosong.
   * **W﻿ujud Fisik?:** Masukan kata YES / NO jika barang yang dijual dalam bentuk fisik ( berwujud ). 

     Jika produk yang dijual berupa jasa maka ketik kata NO. 

     Field ini akan otomatis dibuat YES jika kosong.
   * **C﻿atat Stock?**: Masukan kata YES / NO untuk mencatat stock. 

     Catat Stock ini akan mengetahui jumlah barang masuk dan keluar ( terjual ).

     Field ini akan otomatis dibuat YES jika kosong. 
   * **S﻿elf Pickup?**: Default "Yes" jika field ini dikosongkan.

     Pilih "NO" jika customer hanya bisa berbelanja di online ( tidak datang langsung ke toko ).
   * **P﻿anjang (cm)**: (Opsional) Masukan panjang paket dengan angka tanpa menggunakan huruf, titik dan koma. Panjang paket ini untuk mengetahui besar volume dan untuk menentukan harga ekspedisi. 
   * **L﻿ebar (cm)**: (Opsional) Masukan lebar paket dengan angka tanpa menggunakan huruf, titik dan koma. Lebar paket ini untuk mengetahui besar volume dan untuk menentukan harga ekspedisi.
   * **T﻿inggi (cm)**: (Opsional) Masukan tinggi paket dengan angka tanpa menggunakan huruf, titik dan koma. Tinggi paket ini untuk mengetahui besar volume dan untuk menentukan harga ekspedisi.
   * **W﻿aktu Persiapan (menit)**: (Opsional) Masukan waktu persiapan dengan angka tanpa menggunakan huruf/kata, titik dan koma. 

     Estimasi waktu yang dibutuhkan untuk persiapan untuk metode pickup.
   * **URL Produk 
     https://namatokoanda.com/product/url-produk-akan-ditampilkan-disini** : ( Field ini untuk optimisasi SEO halaman Produk ). 
     Diisi dalam bentuk LINK.

     (opsional, jika kosong akan dibuat otomatis). 
3. J﻿ika telah selesai isi produk dan sudah sesuai dengan ketentuan yang ada, maka langkah selanjutnya adalah pilih dan upload file excel.

   ![](/img/12.1-upload-file-excel.png)
4. T﻿ampilan file excel setelah klik Upload File.

   ![](/img/12.1-tampilan-sukses-upload-semua-produk.png)

   P﻿ada gambar diatas terdapat keterangan:

   * B﻿erhasil di scan: Menampilkan jumlah produk yang ada di dalam file excel. 
   * S﻿ukses Upload: Menampilkan jumlah produk yang sukses upload karena dalam pengisian data telah mengikuti ketentuan yang ada. 
   * G﻿agal Upload: Menampilkan jumlah produk yang gagal upload karena ada data yang tidak sesuai dengan ketentuan yang ada. Jika hal ini terjadi, maka Anda perlu klik *button* **Download Laporan Masal** untuk melihat pesan error pada field **Harap di kosongkan**. Dan pada field yang gagal akan ditampilkan berwarna merah.