import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage.js';
import { initialImages } from './data/initialImages.js';
import Navbar from './components/Navbar.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ManagePage from './pages/ManagePage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';

export default function App() {
  const [images, setImages] = useLocalStorage('gallery-images-v2', initialImages);

  const addImage = (data) =>
    setImages((prev) => [{ ...data, id: Date.now(), favorite: false }, ...prev]);

  const updateImage = (id, data) =>
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, ...data } : img)));

  const deleteImage = (id) => setImages((prev) => prev.filter((img) => img.id !== id));

  const toggleFavorite = (id) =>
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, favorite: !img.favorite } : img)));

  return (
    <div className="app">
      <Navbar count={images.length} />
      <main className="container">
        <Routes>
          <Route path="/" element={<GalleryPage images={images} onToggleFavorite={toggleFavorite} />} />
          <Route
            path="/manage"
            element={<ManagePage images={images} onAdd={addImage} onUpdate={updateImage} onDelete={deleteImage} />}
          />
          <Route path="/favorites" element={<FavoritesPage images={images} onToggleFavorite={toggleFavorite} />} />
          <Route path="*" element={<p className="empty">Page not found.</p>} />
        </Routes>
      </main>
    </div>
  );
}
