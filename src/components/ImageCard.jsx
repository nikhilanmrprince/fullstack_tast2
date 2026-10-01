export default function ImageCard({ image, onOpen, onToggleFavorite }) {
  return (
    <article className="card">
      <button className="card-img" onClick={() => onOpen(image)} aria-label={`Preview ${image.title}`}>
        <img src={image.url} alt={image.title} loading="lazy" />
      </button>
      <div className="card-body">
        <div>
          <h3>{image.title}</h3>
          <span className="tag">{image.category}</span>
        </div>
        <button
          className={`heart ${image.favorite ? 'on' : ''}`}
          onClick={() => onToggleFavorite(image.id)}
          aria-pressed={image.favorite}
          aria-label="Toggle favorite"
        >
          {image.favorite ? '♥' : '♡'}
        </button>
      </div>
    </article>
  );
}
