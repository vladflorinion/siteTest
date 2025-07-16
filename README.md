# BACReady - Pregătire pentru Bacalaureat

Un website educațional modern destinat pregătirii elevilor pentru examenul de Bacalaureat din România.

## 🚀 Cum să pornești proiectul

### Cerințe preliminare
- Node.js (versiunea 16 sau mai nouă)
- npm sau yarn

### Pași pentru instalare

1. **Clonează sau descarcă proiectul**
   ```bash
   # Dacă ai clonat din git
   git clone <repository-url>
   cd bacready
   
   # Sau dacă ai descărcat zip-ul, extrage și navighează în folder
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   ```

3. **Pornește serverul de dezvoltare**
   ```bash
   npm run dev
   ```

4. **Deschide browserul**
   - Serverul va porni pe `http://localhost:5173`
   - Pagina se va deschide automat sau poți accesa manual URL-ul

### Comenzi disponibile

- `npm run dev` - Pornește serverul de dezvoltare
- `npm run build` - Construiește proiectul pentru producție
- `npm run preview` - Previzualizează build-ul de producție
- `npm run lint` - Verifică codul pentru erori

### Structura proiectului

```
src/
├── components/          # Componentele React
│   ├── Header.tsx      # Header-ul cu logo și autentificare
│   ├── SubjectGrid.tsx # Grid-ul cu materiile
│   ├── SubjectCard.tsx # Card-ul individual pentru fiecare materie
│   ├── LoginModal.tsx  # Modal-ul de autentificare
│   └── Footer.tsx      # Footer-ul site-ului
├── App.tsx             # Componenta principală
├── main.tsx           # Punctul de intrare
└── index.css          # Stilurile Tailwind CSS
```

### Tehnologii folosite

- **React 18** - Framework-ul principal
- **TypeScript** - Pentru type safety
- **Tailwind CSS** - Pentru stilizare
- **Vite** - Build tool și dev server
- **Lucide React** - Iconuri
- **Poppins Font** - Fontul principal

### Funcționalități

- ✅ Design responsive (desktop și mobil)
- ✅ 4 materii principale: Română, Matematică, Fizică, Geografie
- ✅ Modal de autentificare
- ✅ Animații și efecte hover
- ✅ Paletă de culori optimizată pentru educație

### Probleme comune

**Dacă întâmpini erori la instalare:**
- Verifică că ai Node.js instalat: `node --version`
- Șterge `node_modules` și `package-lock.json`, apoi rulează din nou `npm install`

**Dacă portul 5173 este ocupat:**
- Vite va găsi automat un port liber (ex: 5174)
- Sau poți specifica un port: `npm run dev -- --port 3000`

### Dezvoltare ulterioară

Pentru a adăuga funcționalități noi:
1. Creează componente noi în folderul `src/components/`
2. Importă și folosește-le în `App.tsx`
3. Adaugă stiluri cu Tailwind CSS
4. Testează pe desktop și mobil

---

**Autor:** BACReady Team  
**Licență:** MIT  
**Anul:** 2025