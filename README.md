# Image Gallery Application (ReactJS)

Browse, search, filter, preview, add, edit, delete and favorite images.

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

## Build
```bash
npm run build
```

## Structure
```
src/
  App.jsx                 routes + shared state (add / update / delete / favorite)
  main.jsx                entry point, HashRouter
  App.css                 responsive styles
  data/initialImages.js   sample data and categories
  hooks/useLocalStorage.js  useState + useEffect persistence
  components/             Navbar, SearchFilterBar, ImageCard, Lightbox, ImageForm
  pages/                  GalleryPage, ManagePage, FavoritesPage
```

## Pages
1. **Gallery** - search, category filter, sort, image preview (lightbox).
2. **Manage** - form with validation to add or edit; delete with confirmation.
3. **Favorites** - favorite images plus simple statistics.
