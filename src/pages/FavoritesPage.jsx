import { useEffect } from 'react';
import ImageCard from '../components/ImageCard.jsx';
import { CATEGORIES } from '../data/initialImages.js';

export default function FavoritesPage({ images, onToggleFavorite }) {
  useEffect(() => { document.title = 'Favorites | Image Gallery Application'; }, []);

  const favorites = images.filter((img) => img.favorite);
  const percent = images.length ? Math.round((favorites.length / images.length) * 100) : 0;

  return (
    <section>
      <div className="stats">
        <div className="stat"><strong>{images.length}</strong><span>Total images</span></div>
        <div className="stat"><strong>{favorites.length}</strong><span>Favorites</span></div>
        <div className="stat"><strong>{percent}%</strong><span>Marked favorite</span></div>
      </div>

      <div className="breakdown">
        {CATEGORIES.map((c) => (
          <span className="tag" key={c}>{c}: {images.filter((i) => i.category === c).length}</span>
        ))}
      </div>

      {favorites.length === 0 ? (
        <p className="empty">No favorites yet. Tap the heart on any image in the gallery.</p>
      ) : (
        <div className="grid">
          {favorites.map((img) => (
            <ImageCard key={img.id} image={img} onOpen={() => {}} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      )}
    </section>
  );
}
