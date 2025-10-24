# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **TrueDignity** - a persuasive onboarding website proposal for a notary operating system built with VitePress. The website serves as a conversion tool to convince notaries to purchase the "TrueDignity" system using a structured storyline that transforms pain points into concrete solutions.

## Tech Stack

- **VitePress v1.6.4** - Static site generator with Vue 3
- **Custom CSS** - Persuasive styling with animations and gradients
- **Markdown** - Content management
- **TypeScript** - Configuration for better development experience

## Development Commands

```bash
# Start development server
npm run dev
# Website available at http://localhost:5173/

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Content Structure
The website follows a persuasive storytelling structure:
- **Homepage** (`index.md`) - Hero section with value proposition
- **Storyline Pages** - Problem recognition, diagnosis, solution presentation
- **Demo Pages** - Feature demonstrations with before/after transformations
- **Call-to-Action** - Conversion-focused contact pages

### Configuration
- **VitePress Config** (`.vitepress/config.mts`): Indonesian language (`id-ID`), custom navigation, sidebar structure, SEO optimization
- **Theme Customization** (`.vitepress/theme/`): Custom CSS with Bitcoin-inspired color scheme, persuasive design elements

### Design System
- **Color Scheme**: Bitcoin-inspired orange/gold palette
- **Typography**: Custom gradients and animations for persuasive impact
- **Layout**: Responsive grid systems with mobile-first approach
- **Sections**: Problem, diagnosis, solution, and CTA sections with distinct background gradients

## Key Features

### Persuasive Elements
- Problem-Solution flow with emotional triggers
- Visual sections with different background gradients
- Interactive demo buttons with hover effects
- Mobile-responsive design with print-friendly styles

### Demo Structure
- Dashboard Real-time (stress & doubt solution)
- Workflow Management (lost productivity solution)
- Document Security (security risk solution)
- Client Management (customer churn solution)
- Financial Management (financial health optimization)

### Conversion Strategy
- Limited founding member program (10 slots)
- Free 30-minute consultation
- Multiple contact channels
- Psychological triggers (pain amplification, scarcity, authority)

## Content Guidelines

### Language & Tone
- Use Indonesian language (`id-ID`) for all content
- Maintain persuasive, benefit-focused messaging
- Focus on pain points and transformation stories
- Use notary-specific terminology and scenarios

### File Organization
- Storyline pages follow narrative flow: problem → diagnosis → solution → CTA
- Demo pages are feature-specific with clear before/after transformations
- All content uses YAML frontmatter for layout configuration

### Styling Conventions
- Use custom CSS classes: `.problem-section`, `.diagnosis-section`, `.solution-section`, `.features-section`, `.cta-section`
- Apply feature cards with hover animations
- Use gradient backgrounds for visual hierarchy
- Maintain Bitcoin-inspired color scheme consistency

## Development Workflow

1. **Content Updates**: Edit markdown files in root directory
2. **Styling Changes**: Modify `.vitepress/theme/custom.css`
3. **Configuration**: Update `.vitepress/config.mts` for navigation/structure
4. **Testing**: Use `npm run dev` for local development
5. **Deployment**: Build with `npm run build` for static hosting

## Deployment Options

- **Vercel** (recommended): Use `vercel --prod` after installing Vercel CLI
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **GitHub Pages**: Set base URL in config and enable GitHub Pages

## Target Audience

- Indonesian notaries & PPAT
- Notary offices with 2-10 staff
- Monthly document volume of 20-100
- Tech-savvy, growth-oriented owners

Tentu, ini adalah petunjuk pengerjaan konten yang komprehensif untuk situs onboarding TrueDignity, yang dirancang untuk dieksekusi oleh tim konten (penulis, desainer, videografer). Petunjuk ini didasarkan pada strategi yang telah Anda susun.

---

## **PANDUAN PEMBUATAN KONTEN: SITUS ONBOARDING EARLY ADOPTER TRUE DIGNITY**

### **A. PRINSIP PANDUAN UTAMA (THE CORE PHILOSOPHY)**

Sebelum menulis satu kata pun, pahami tiga pilar ini. Setiap konten yang dibuat **wajib** selaras dengan prinsip berikut:

1.  **Framework Storybrand Adalah Hukum:**
    * **HERO (Pahlawan):** **Notaris.** Konten harus berpusat pada masalah, tujuan, dan kemenangan mereka.
    * **VILLAIN (Musuh):** **Kerumitan Administrasi & Interupsi.** Ini adalah musuh bersama yang harus kita kalahkan.
    * **GUIDE (Pemandu):** **TrueDignity.** Kita bukan pahlawan. Kita adalah pemandu bijak yang memberikan Hero sebuah rencana dan alat untuk menang.
    * **TRANSFORMASI:** Dari "Notaris yang kewalahan dan terikat di kantor" menjadi "Notaris modern yang efisien, mobile, dan memegang kendali penuh."

2.  **Prinsip Kurator Museum (Less is More):**
    * **Tugas kita adalah menyingkirkan kebisingan.** Jangan pamerkan semua fitur. Hanya tampilkan solusi untuk rasa sakit yang paling akut.
    * **Aturan Praktis:** Jika sebuah kalimat atau gambar tidak secara langsung menjawab pertanyaan "Apakah ini akan membuat pekerjaan saya sebagai notaris lebih mudah, cepat, atau aman?", maka hapus.

3.  **Fokus pada Transformasi, Bukan Fitur:**
    * **JANGAN JUAL:** "Sistem manajemen tugas."
    * **JUAL:** "Pulang jam 5 sore tanpa khawatir ada pekerjaan yang terlewat."
    * **JANGAN JUAL:** "TTD Digital."
    * **JUAL:** "Tanda tangan akta dari mana saja, bahkan saat liburan."

---

### **B. PROFIL TARGET AUDIENS (KITA BERBICARA KEPADA SIAPA?)**

Bayangkan kita berbicara langsung kepada **"Ibu Notaris Rina,"** usia 35-50 tahun.
* **Kesehariannya:** Sibuk luar biasa, pagi di kantor, siang bertemu klien, sore memeriksa berkas. Ponselnya terus berdering dengan pertanyaan dari klien dan staf.
* **Kekhawatirannya:** Takut ada berkas yang salah atau hilang, khawatir tentang keamanan data, stres karena pekerjaan tidak pernah benar-benar selesai.
* **Keinginannya:** Ingin punya lebih banyak waktu untuk fokus pada aspek hukum yang penting, ingin memberikan layanan yang lebih cepat kepada klien, dan ingin bisa mengontrol kantornya bahkan saat tidak di tempat.
* **Bahasa:** Gunakan bahasa yang profesional namun personal dan mudah dipahami. Dia tidak punya waktu untuk jargon teknis.

---

### **C. STRUKTUR & PETUNJUK KONTEN PER HALAMAN**

Ini adalah panduan untuk 3 halaman inti di Fase 1 Peluncuran.

#### **1. HALAMAN UTAMA (HOMEPAGE)**
**Tujuan:** Membuat Ibu Rina merasa, **"Ini saya banget! Akhirnya ada yang mengerti masalah saya."**

* **Section 1: The Hook (Di Atas Lipatan)**
    * **Headline Utama:** Fokus pada hasil akhir atau solusi dari rasa sakit terbesar.
        * *Contoh A (Fokus Waktu):* `Kembalikan Waktu Anda. Kendalikan Kantor Notaris Anda dari Mana Saja.`
        * *Contoh B (Fokus Ketenangan):* `Hentikan Interupsi Klien. Fokus pada Akta yang Paling Penting.`
    * **Sub-headline:** Jelaskan secara singkat bagaimana cara mencapainya.
        * *Contoh:* `TrueDignity adalah sistem terpadu pertama untuk Notaris modern yang mengotomatiskan administrasi, mengamankan berkas, dan membebaskan Anda dari meja kantor.`
    * **Call-to-Action (CTA) Utama:** `Lihat Cara Kerjanya (Demo Cepat)` -> Mengarah ke Halaman Demo.
    * **Visual:** Gambar seorang profesional yang terlihat tenang dan terkendali, bukan gambar software yang rumit.

* **Section 2: The Problem (Menyuarakan Rasa Sakit)**
    * **Headline:** `Apakah ini yang kamu rasakan setiap hari?`
    * **Isi:** Gunakan format ikon + teks singkat. Pilih 3-4 rasa sakit paling akut dari 9 poin yang ada.
        * `(Ikon Telepon Dicoret)` **Interupsi tanpa henti** dari klien yang menanyakan status permohonan.
        * `(Ikon Tumpukan Berkas)` **Stres mencari berkas penting** di tumpukan dokumen atau folder digital yang berantakan.
        * `(Ikon Gembok)` **Wajib ke kantor** hanya untuk tanda tangan satu dokumen penting.

* **Section 3: The Solution (Memperkenalkan Pemandu)**
    * **Headline:** `Saatnya Bekerja dengan Lebih Cerdas, Bukan Lebih Keras.`
    * **Isi:** Paragraf singkat yang memperkenalkan TrueDignity sebagai pemandu.
        * *Contoh:* `Kami merancang TrueDignity berdasarkan pengalaman langsung dengan kantor notaris seperti kamu. Ini bukan sekadar software, tapi partner kerja digital yang membereskan semua kerumitan administrasi agar kamu bisa fokus pada hal yang utama.`
    * **Visual:** Tampilan *dashboard* aplikasi yang bersih, simpel, dan menarik.

* **Section 4: The Proof (Bukti Nyata)**
    * **Headline:** `Sudah Terbukti Membantu Notaris Seperti Anda.`
    * **Isi:** Tampilkan kutipan testimoni paling kuat dari klien `knzonline.com`. Fokus pada hasil yang mereka rasakan.
        * *Contoh:* `"Sejak menggunakan sistem ini, waktu saya untuk mencari berkas berkurang 90%. Saya bisa memonitor semua pekerjaan tim dari rumah. Benar-benar game-changer." - [Nama Klien], [Kantor Notaris Klien]`

* **Section 5: Final CTA (Ajakan Terakhir)**
    * **Headline:** `Siap untuk Transformasi?`
    * **Isi:** Ulangi penawaran *early adopter* dengan singkat.
    * **CTA:** `Amankan Slot Early Adopter Anda` -> Mengarah ke Halaman Harga.

---

#### **2. HALAMAN DEMO (CONSIDERATION)**
**Tujuan:** Membuat Ibu Rina berpikir, **"Wow, ini solusi yang saya butuhkan sekarang juga."**

* **Section 1: Video Utama**
    * **Headline:** `Lihat Bagaimana TrueDignity Membereskan Pekerjaan Anda dalam 2 Menit.`
    * **Isi:** Sematkan 4 video demo utama di sini. Setiap video harus:
        * Berdurasi 60-90 detik.
        * Fokus pada SATU alur kerja (Problem -> Solution -> Benefit).
        * Judul video harus berorientasi pada manfaat.
            * **Video 1:** `Cara Memonitor Semua Permohonan Klien dalam 30 Detik.`
            * **Video 2:** `Cara Tanda Tangan Dokumen Secara Digital dari Mana Saja.`
            * **Video 3:** `Cara Menghentikan Interupsi Klien dengan Portal Otomatis.`
            * **Video 4:** `Cara Menemukan Berkas Apapun dalam Hitungan Detik.`

* **Section 2: Penjelasan Keamanan**
    * **Headline:** `Data Anda 100% Aman dan di Bawah Kendali Anda.`
    * **Isi:** Jelaskan konsep arsitektur *federated* dengan bahasa sederhana.
        * *Contoh:* `Tidak seperti solusi lain, TrueDignity dirancang agar semua data sensitif Anda tersimpan aman di perangkat Anda sendiri, bukan di server pusat. Anda memegang kunci sepenuhnya.`

* **Section 3: CTA yang Jelas**
    * **Headline:** `Ingin Melihat Lebih Jauh Sesuai Kebutuhan Kantor Anda?`
    * **CTA Primer:** `Jadwalkan Demo Langsung 1-on-1` -> Mengarah ke Calendly.
    * **CTA Sekunder:** `Saya Siap, Amankan Slot Early Adopter!` -> Mengarah ke Halaman Harga.

---

#### **3. HALAMAN HARGA (DECISION)**
**Tujuan:** Membuat investasi ini terasa sebagai sebuah keputusan cerdas yang tidak bisa ditunda.

* **Section 1: Penawaran Eksklusif**
    * **Headline:** `Penawaran Eksklusif (dan Terbatas) untuk 10 Notaris Visioner.`
    * **Sub-headline:** `Jadilah bagian dari pionir yang membentuk masa depan digital kantor notaris di Indonesia.`

* **Section 2: The Price & Value Stack**
    * **Harga:** Tampilkan dengan jelas. `Investasi Early Adopter: Rp 10.000.000 / bulan (Komitmen 6 bulan)`
    * **Value Stack (Daftar Nilai):** Gunakan format checklist untuk menunjukkan semua yang mereka dapatkan.
        * `✅ Akses Penuh Platform TrueDignity`
        * `✅ Upgrade Gratis Seumur Hidup ke Versi Lengkap`
        * `✅ Hak Eksklusif Co-Creation (Masukan Anda Membentuk Produk)`
        * `✅ Onboarding & Training Prioritas`
        * `✅ Dukungan Teknis Langsung via WhatsApp`
        * `✅ Potongan Harga 40% (Harga Normal: Rp 16.700.000/bulan)`

* **Section 3: Urgency & Scarcity**
    * **Headline:** `Penawaran Ini Tidak Akan Terulang Lagi.`
    * **Isi:** Gunakan elemen visual seperti counter. `Sisa Slot Tersedia: 7 dari 10`
    * **Tegaskan:** `Setelah 10 slot terisi, program Early Adopter akan ditutup selamanya.`

* **Section 4: The Final CTA**
    * **Headline:** `Amankan Posisi Anda Sekarang.`
    * **Tombol CTA:** `Daftar Sebagai Early Adopter` -> Mengarah ke Calendly/Formulir/WhatsApp.
    * **FAQ Singkat:** Tambahkan 3 pertanyaan umum seperti "Bagaimana proses pembayarannya?", "Apakah data saya aman?", "Apa yang terjadi setelah 6 bulan?".

---

### **E. PETUNJUK GAYA BAHASA & TEKNIS**

* **Gaya Bahasa:** Gunakan **"Kamu"**. Terasa lebih personal, empatik, dan membangun hubungan layaknya seorang pemandu.
* **Kalimat Aktif:** Hindari kalimat pasif. Buat tulisan yang penuh energi.
* **Sederhana & Jelas:** Hindari istilah teknis (`arsitektur federated`, `workflow acceleration`). Ganti dengan manfaatnya (`data di perangkat sendiri`, `kerja lebih cepat`).
* **Konsistensi CTA:** Gunakan kata kerja perintah yang kuat: `Dapatkan`, `Lihat`, `Jadwalkan`, `Amankan`, `Mulai`.

### **F. CHECKLIST SEBELUM PUBLIKASI**
Tanyakan ini untuk setiap bagian konten:
- [ ] Apakah Notaris adalah pahlawannya?
- [ ] Apakah konten ini fokus pada transformasi (hasil akhir)?
- [ ] Apakah bahasanya sederhana dan bebas jargon?
- [ ] Apakah ajakan untuk bertindaknya (CTA) sangat jelas?
- [ ] Apakah konten ini menghilangkan "kebisingan" yang tidak perlu?
- [ ] Apakah sudah dikoreksi (proofread) dari kesalahan tik?
