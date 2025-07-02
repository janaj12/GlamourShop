# 💄 Glamour Shop – Online prodavnica kozmetike

Glamour Shop je jednostavna veb aplikacija razvijena kao završni projekat iz predmeta **IT354 – Veb Sistemi 1**. Aplikacija predstavlja online prodavnicu kozmetike u kojoj korisnici mogu da pregledaju proizvode, registruju se, prijave i koriste funkcionalnost korpe. Administrator može da upravlja proizvodima (dodaje, menja, briše) i da pregleda sve korisnike.

---

## 🧪 Tehnologije

- **React** – frontend biblioteka
- **Vite** – razvojno okruženje za React aplikaciju
- **React Router DOM** – navigacija između stranica
- **Tailwind CSS** – stilizacija korisničkog interfejsa
- **json-server** – simulacija REST API-ja (fake backend)

---

## ⚙️ Pokretanje aplikacije

### 1. Kloniraj repozitorijum

```bash
git clone https://github.com/tvoj-github/glamour-shop.git
cd glamour-shop
```

### 2. Instaliraj zavisnosti

```bash
npm install
```

### 3. Pokreni frontend (Vite)

```bash
npm run dev
```

Aplikacija će se pokrenuti na:  
👉 `http://localhost:5173/`

### 4. Pokreni backend (`json-server`)

```bash
npm run server
```

Server će biti dostupan na:  
👉 `http://localhost:5000/`

---

## 📁 Struktura projekta

```
/src
  ├── pages/               # Stranice (Home, Login, Register, AdminPanel, ProductDetails, Cart)
  ├── components/          # Komponente (Navbar, ProtectedRoute, AdminProductForm)
  ├── context/             # AuthContext (login, logout, korpa)
  └── App.jsx              # Glavna logika rutiranja
```

---

## 👥 Uloge

- **Korisnik**:
  - Registracija i prijava
  - Pregled proizvoda
  - Dodavanje u korpu

- **Administrator**:
  - Prijava kao `admin`
  - Dodavanje, izmena i brisanje proizvoda
  - Pregled svih korisnika

---

## 🧪 Test korisnički nalozi

```json
{
  "username": "admin",
  "password": "admin123",
  "role": "admin"
}
```

---

## 📷 Slike proizvoda

U `db.json` koriste se stabilni linkovi sa Pixabay:
- https://cdn.pixabay.com/photo/2017/06/20/17/57/lipstick-2427999_1280.jpg
- https://cdn.pixabay.com/photo/2021/04/30/17/53/makeup-6224396_1280.jpg
- https://cdn.pixabay.com/photo/2017/02/07/13/51/mascara-2041853_1280.jpg

---

## 📌 Napomene

- Svi `fetch()` pozivi koriste `http://localhost:5000/` kao bazu
- Aplikacija koristi lokalno stanje za korpu
- Rute su zaštićene na osnovu korisničke uloge

---

## 📄 Licenca

Ovaj projekat je izrađen isključivo u edukativne svrhe kao deo školskog zadatka.