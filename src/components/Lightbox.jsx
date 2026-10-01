import { useEffect } from 'react';

export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={image.url} alt={image.title} />
        <h2>{image.title}</h2>
        <p>{image.description || 'No description.'}</p>
        <span className="tag">{image.category}</span>
        <div className="lightbox-actions">
          <button className="btn ghost" onClick={onPrev}>Previous</button>
          <button className="btn ghost" onClick={onNext}>Next</button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
