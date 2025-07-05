# Analisis Transaksi Bank - Proyek Machine Learning

![Project Banner](https://img.shields.io/badge/Machine%20Learning-Analisis%20Bank-blue.svg)
![Python](https://img.shields.io/badge/Python-3.8+-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🚀 Gambaran Proyek

Proyek ini menyajikan analisis machine learning komprehensif terhadap data transaksi bank, dengan fokus pada segmentasi pelanggan melalui clustering dan pemodelan prediktif melalui klasifikasi. Analisis mencakup 2.182 catatan transaksi dengan 15 fitur detail, memberikan wawasan tentang pola perilaku pelanggan dan deteksi penipuan potensial.

### 🎯 Tujuan Utama
- **Segmentasi Pelanggan**: Mengidentifikasi kelompok pelanggan yang berbeda berdasarkan pola transaksi
- **Pemodelan Prediktif**: Membangun model klasifikasi untuk memprediksi segmen pelanggan
- **Deteksi Penipuan**: Menganalisis pola yang dapat mengindikasikan perilaku anomali
- **Business Intelligence**: Menyediakan wawasan yang dapat ditindaklanjuti untuk institusi keuangan

## 📊 Informasi Dataset

Dataset berisi data transaksi bank komprehensif dengan fitur-fitur berikut:

| Fitur | Deskripsi |
|---------|-------------|
| `TransactionID` | Identifier unik untuk setiap transaksi |
| `AccountID` | Identifier akun unik |
| `TransactionAmount` | Nilai transaksi dalam mata uang |
| `TransactionDate` | Tanggal dan waktu transaksi |
| `TransactionType` | Transaksi kredit atau debit |
| `Location` | Lokasi geografis (kota-kota AS) |
| `DeviceID` | Perangkat yang digunakan untuk transaksi |
| `IP Address` | Alamat IPv4 selama transaksi |
| `MerchantID` | Identifier merchant unik |
| `AccountBalance` | Saldo akun setelah transaksi |
| `PreviousTransactionDate` | Tanggal transaksi terakhir |
| `Channel` | Saluran transaksi (Online, ATM, Branch) |
| `CustomerAge` | Usia pelanggan |
| `CustomerOccupation` | Profesi pelanggan |
| `TransactionDuration` | Durasi transaksi dalam detik |
| `LoginAttempts` | Jumlah percobaan login |

## 🔧 Implementasi Teknis

### Teknologi yang Digunakan
- **Python 3.8+**
- **Pandas** - Manipulasi dan analisis data
- **NumPy** - Komputasi numerik
- **Scikit-learn** - Algoritma machine learning
- **Matplotlib & Seaborn** - Visualisasi data
- **Yellowbrick** - Visualisasi machine learning

### Pipeline Machine Learning

#### 1. Preprocessing Data
```python
# Feature scaling
scaler = MinMaxScaler()
numerical_features = ['TransactionAmount', 'AccountBalance', 'CustomerAge', 
                     'TransactionDuration', 'LoginAttempts']
df[numerical_features] = scaler.fit_transform(df[numerical_features])

# Label encoding
categorical_features = ['TransactionType', 'Location', 'Channel', 'CustomerOccupation']
encoders = {}
for col in categorical_features:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le
```

#### 2. Analisis Clustering
- **Algoritma**: K-Means Clustering
- **Optimisasi**: Metode Elbow untuk menentukan cluster optimal
- **Cluster yang Diidentifikasi**: 4 segmen pelanggan yang berbeda
- **Evaluasi**: Analisis Silhouette Score

#### 3. Model Klasifikasi
Beberapa algoritma diimplementasikan dan dibandingkan:

| Algoritma | Akurasi | Precision | Recall | F1-Score |
|-----------|----------|-----------|--------|----------|
| **Decision Tree** | **100.0%** | **1.000** | **1.000** | **1.000** |
| **Random Forest** | **100.0%** | **1.000** | **1.000** | **1.000** |
| **Support Vector Machine** | **100.0%** | **1.000** | **1.000** | **1.000** |
| K-Nearest Neighbors | 99.77% | 0.998 | 0.998 | 0.998 |

## 📈 Hasil Utama

### Segmentasi Pelanggan
1. **Professional Doctors (Premium)** (25.4%): Nilai transaksi tertinggi, preferensi layanan premium
2. **Efficient Students (Growth)** (26.2%): Transaksi cepat, manajemen keuangan yang baik
3. **Digital Native (Tech-Savvy)** (23.9%): Lebih suka ATM, berorientasi self-service
4. **Mature Conservative (Stable)** (24.5%): Perbankan tradisional, fokus pada cabang

### Performa Model
- **Hasil Luar Biasa**: 3 model mencapai akurasi sempurna 100.0%
- **Performa Konsisten**: Semua model menunjukkan kemampuan prediksi yang sangat baik
- **Terbaik Secara Keseluruhan**: Decision Tree, Random Forest, dan SVM dengan skor sempurna

## 🌐 Demo Live

🌐 **Website Live**: [Analisis Transaksi Bank](https://dafisnadhifsaputra.github.io/BankML)  
📂 **Repository GitHub**: [Source Code](https://github.com/DafisNadhifSaputra/BankML)

### Fitur Website
- **Visualisasi Interaktif**: Grafik dinamis menampilkan hasil clustering
- **Perbandingan Model**: Metrik performa side-by-side
- **Desain Responsif**: Interface yang mobile-friendly
- **UI Modern**: Desain yang bersih dan profesional dengan animasi

## 📁 Struktur Proyek

```
analisis-transaksi-bank/
│
├── notebooks/
│   ├── [Clustering]_Submission_Akhir_BMLP_Dafis_Nadhif_Saputra.ipynb
│   └── [Klasifikasi]_Submission_Akhir_BMLP_Dafis_Nadhif_Saputra.ipynb
│
├── data/
│   ├── bank_transactions_data_edited.xlsx
│   ├── data_clustering.csv
│   └── data_clustering_inverse.csv
│
├── models/
│   ├── decision_tree_model.h5
│   ├── explore_RandomForest_classification.h5
│   ├── explore_SVM_classification.h5
│   ├── explore_KNN_classification.h5
│   ├── model_clustering.h5
│   ├── PCA_model_clustering.h5
│   └── tuning_classification.h5
│
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE
```

## 🚀 Memulai

### Prasyarat
```bash
pip install pandas numpy scikit-learn matplotlib seaborn yellowbrick joblib
```

### Menjalankan Analisis
1. **Clone repository**
   ```bash
   git clone https://github.com/DafisNadhifSaputra/BankML.git
   cd BankML
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Jalankan notebooks**
   - Buka Jupyter Notebook atau JupyterLab
   - Navigasi ke folder notebooks
   - Jalankan analisis clustering terlebih dahulu, kemudian klasifikasi

4. **Lihat website**
   - Buka `index.html` di browser Anda
   - Atau deploy ke GitHub Pages untuk hosting live

## 📊 Contoh Visualisasi

### Visualisasi Clustering
- **Scatter plots** menampilkan segmen pelanggan
- **Correlation matrices** untuk hubungan antar fitur
- **Distribution plots** untuk fitur numerik

### Hasil Klasifikasi
- **Grafik perbandingan performa**
- **Confusion matrices** untuk setiap model
- **Feature importance plots**

## 🎯 Aplikasi Bisnis

### Institusi Keuangan
- **Segmentasi Pelanggan**: Kampanye pemasaran yang ditargetkan
- **Penilaian Risiko**: Mengidentifikasi pola transaksi berisiko tinggi
- **Rekomendasi Produk**: Produk keuangan yang dipersonalisasi

### Deteksi Penipuan
- **Deteksi Anomali**: Mengidentifikasi pola transaksi yang tidak biasa
- **Monitoring Real-time**: Menandai aktivitas yang mencurigakan
- **Peningkatan Keamanan**: Memperbaiki sistem autentikasi

## 🔮 Pengembangan Selanjutnya

- [ ] **Model Deep Learning**: Implementasi neural networks untuk akurasi yang lebih baik
- [ ] **Pemrosesan Real-time**: Stream processing untuk analisis transaksi live
- [ ] **Visualisasi Lanjutan**: Plot clustering 3D dan dashboard interaktif
- [ ] **Pengembangan API**: REST API untuk prediksi model
- [ ] **Deployment Docker**: Deployment aplikasi yang terkontainerisasi

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.


## 👨‍💻 Penulis

**Dafis Nadhif Saputra**
- GitHub: [@DafisNadhifSaputra](https://github.com/DafisNadhifSaputra)
- LinkedIn: [Dafis Nadhif Saputra](https://www.linkedin.com/in/dafis-nadhif-saputra-10450a27b)
- Email: dafisnadhifs123@gmail.com

## 🙏 Pengakuan

- **Program BMLP**: Untuk menyediakan kerangka pembelajaran
- **Sumber Dataset**: Data transaksi bank untuk tujuan edukasi
- **Komunitas Open Source**: Untuk library dan tools yang luar biasa

## 📈 Metrik Performa

```
Ringkasan Performa Model:
├── Decision Tree: 100.0% akurasi (Sempurna)
├── Random Forest: 100.0% akurasi (Sempurna)
├── SVM: 100.0% akurasi (Sempurna)
└── KNN: 99.77% akurasi (Sangat Baik)

Hasil Clustering:
├── Total Data: 2.182 transaksi
├── Cluster Optimal: 4
├── Distribusi: 23.9% - 26.2% (seimbang)
└── Segmen: Professional, Student, Digital, Conservative
```

---

⭐ **Beri bintang pada repository ini jika membantu Anda!**

📧 **Ada pertanyaan atau saran? Jangan ragu untuk membuka issue atau menghubungi saya langsung.**
