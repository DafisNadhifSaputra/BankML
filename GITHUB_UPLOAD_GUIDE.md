# 📚 Panduan Upload Proyek ke GitHub

## 🚀 Langkah-langkah Upload ke GitHub

### 1. Persiapan Akun GitHub
1. **Buat akun GitHub** di [github.com](https://github.com) jika belum punya
2. **Verifikasi email** Anda
3. **Login** ke akun GitHub

### 2. Buat Repository Baru
1. Klik tombol **"New"** atau **"+"** di pojok kanan atas
2. Pilih **"New repository"**
3. Isi informasi repository:
   - **Repository name**: `BMLP_Dafis_Nadhif_Saputra`
   - **Description**: `Bank Transaction Analysis - Machine Learning Project for Customer Segmentation and Fraud Detection`
   - **Public/Private**: Pilih **Public** agar bisa dilihat orang lain
   - **Initialize with README**: ❌ Jangan centang (karena sudah ada README.md)
4. Klik **"Create repository"**

### 3. Install Git (Jika Belum Ada)
```bash
# Download Git dari: https://git-scm.com/download/win
# Atau install via Chocolatey
choco install git

# Atau install via winget
winget install --id Git.Git -e --source winget
```

### 4. Setup Git (Pertama Kali)
```bash
# Set nama dan email
git config --global user.name "Dafis Nadhif Saputra"
git config --global user.email "your-email@example.com"

# Cek konfigurasi
git config --list
```

### 5. Upload Proyek ke GitHub

#### Opsi A: Menggunakan Command Line (Git Bash/PowerShell)

1. **Buka terminal** di folder proyek:
```bash
cd "c:\Users\LENOVO\Downloads\BMLP_Dafis_Nadhif_Saputra"
```

2. **Initialize Git repository**:
```bash
git init
```

3. **Add semua file**:
```bash
git add .
```

4. **Commit pertama**:
```bash
git commit -m "Initial commit: Bank Transaction Analysis ML Project

- Complete clustering analysis with 4 customer segments
- Classification models with 100% accuracy (Decision Tree, Random Forest, SVM)
- Interactive website with dark/light mode
- Comprehensive documentation in Indonesian
- 2,182 transaction dataset analysis"
```

5. **Connect ke GitHub repository**:
```bash
# Ganti 'yourusername' dengan username GitHub Anda
git remote add origin https://github.com/yourusername/BMLP_Dafis_Nadhif_Saputra.git
```

6. **Push ke GitHub**:
```bash
git branch -M main
git push -u origin main
```

#### Opsi B: Menggunakan GitHub Desktop (GUI)

1. **Download GitHub Desktop** dari [desktop.github.com](https://desktop.github.com)
2. **Install dan login** dengan akun GitHub
3. **Create new repository** atau **Add existing repository**
4. **Pilih folder proyek** Anda
5. **Commit changes** dengan pesan yang deskriptif
6. **Publish repository** ke GitHub

#### Opsi C: Upload Manual via Web Browser

1. **Buka repository** yang sudah dibuat di GitHub
2. **Click "uploading an existing file"**
3. **Drag and drop** semua file dan folder proyek
4. **Add commit message**:
   ```
   Initial commit: Bank Transaction Analysis ML Project
   
   Complete machine learning project with clustering and classification
   ```
5. **Click "Commit changes"**

### 6. Verifikasi Upload

Pastikan semua file ter-upload dengan benar:
- ✅ `index.html` - Website utama
- ✅ `styles.css` - Styling
- ✅ `script.js` - JavaScript
- ✅ `README.md` - Dokumentasi
- ✅ `DEPLOYMENT_GUIDE.md` - Panduan deployment
- ✅ `/notebooks/` - Jupyter notebooks
- ✅ `/data/` - Dataset dan hasil
- ✅ `/models/` - Model ML yang sudah dilatih

### 7. Aktifkan GitHub Pages (Opsional)

Untuk membuat website live:

1. **Masuk ke repository** di GitHub
2. **Click tab "Settings"**
3. **Scroll ke "Pages"** di sidebar kiri
4. **Source**: Pilih "Deploy from a branch"
5. **Branch**: Pilih "main"
6. **Folder**: Pilih "/ (root)"
7. **Click "Save"**

Website akan live di: `https://yourusername.github.io/BMLP_Dafis_Nadhif_Saputra`

### 8. Update README dengan Link Live

```bash
# Edit README.md dan tambahkan link live demo
git add README.md
git commit -m "Add live demo link to GitHub Pages"
git push
```

### 9. Tips Tambahan

#### Buat .gitignore file:
```bash
# Buat file .gitignore untuk mengabaikan file yang tidak perlu
echo "*.pyc
__pycache__/
.DS_Store
.vscode/
*.log" > .gitignore
```

#### Buat Release:
1. **Click "Releases"** di repository
2. **Click "Create a new release"**
3. **Tag version**: `v1.0.0`
4. **Release title**: `Bank Transaction Analysis v1.0`
5. **Description**: Jelaskan fitur dan hasil analisis
6. **Click "Publish release"**

## 🎯 Contoh Repository URL

Setelah upload, repository Anda akan tersedia di:
```
https://github.com/yourusername/BMLP_Dafis_Nadhif_Saputra
```

## 📋 Checklist Upload

- [ ] Repository dibuat di GitHub
- [ ] Git dikonfigurasi dengan nama dan email
- [ ] Semua file ter-upload (website, notebooks, data, models)
- [ ] README.md ter-update dengan hasil yang benar
- [ ] Repository bersifat public
- [ ] GitHub Pages diaktifkan (opsional)
- [ ] Link repository dibagikan

## 🚨 Troubleshooting

### Error: Authentication failed
```bash
# Gunakan Personal Access Token instead of password
# Setting > Developer settings > Personal access tokens
```

### Error: File too large
```bash
# GitHub memiliki limit 100MB per file
# Compress atau gunakan Git LFS untuk file besar
```

### Error: Remote already exists
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/BMLP_Dafis_Nadhif_Saputra.git
```

## 🎉 Selamat!

Proyek Anda sekarang sudah tersedia di GitHub dan bisa diakses oleh siapa saja!

**Share link repository Anda:**
- Di CV/Portfolio
- LinkedIn
- Submission BMLP
- Social media

---

💡 **Pro Tip**: Buat README yang menarik dengan badge, screenshot, dan demo live untuk menarik perhatian recruiter dan developer lain!
