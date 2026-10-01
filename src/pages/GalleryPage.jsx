import { useState, useEffect, useMemo } from 'react';
import SearchFilterBar from '../components/SearchFilterBar.jsx';
import ImageCard from '../components/ImageCard.jsx';
import Lightbox from '../components/Lightbox.jsx';

export default function GalleryPage({ images, onToggleFavorite }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => { document.title = 'Gallery | Image Gallery Application'; }, []);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = images.filter(
      (img) =>
        (category === 'All' || img.category === category) &&
        (!q || img.title.toLowerCase().includes(q) || img.description.toLowerCase().includes(q))
    );
    return sort === 'title' ? [...list].sort((a, b) => a.title.localeCompare(b.title)) : list;
  }, [images, search, category, sort]);

  const index = visible.findIndex((img) => img.id === selectedId);
  const step = (d) => setSelectedId(visible[(index + d + visible.length) % visible.length].id);

  return (
    <section>
      <SearchFilterBar {...{ search, setSearch, category, setCategory, sort, setSort }} />
      <p className="muted">{visible.length} of {images.length} images</p>

      {visible.length === 0 ? (
        <p className="empty">No images match your search.</p>
      ) : (
        <div className="grid">
          {visible.map((img) => (
            <ImageCard key={img.id} image={img} onOpen={(i) => setSelectedId(i.id)} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      )}

      {index >= 0 && (
        <Lightbox image={visible[index]} onClose={() => setSelectedId(null)} onPrev={() => step(-1)} onNext={() => step(1)} />
      )}
    </section>
  );
}
