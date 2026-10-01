import { useState, useEffect } from 'react';
import ImageForm from '../components/ImageForm.jsx';

export default function ManagePage({ images, onAdd, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(null);

  useEffect(() => { document.title = 'Manage | Image Gallery Application'; }, []);

  const handleSubmit = (data) => {
    if (editing) {
      onUpdate(editing.id, data);
      setEditing(null);
    } else {
      onAdd(data);
    }
  };

  const handleDelete = (img) => {
    if (window.confirm(`Delete "${img.title}"?`)) {
      onDelete(img.id);
      if (editing && editing.id === img.id) setEditing(null);
    }
  };

  return (
    <section className="manage">
      <ImageForm initial={editing} onSubmit={handleSubmit} onCancel={() => setEditing(null)} />

      <div className="list">
        <h2>All images ({images.length})</h2>
        {images.length === 0 && <p className="empty">Nothing here yet. Add your first image.</p>}
        {images.map((img) => (
          <div className="row" key={img.id}>
            <img src={img.url} alt="" />
            <div className="row-info">
              <strong>{img.title}</strong>
              <span className="tag">{img.category}</span>
            </div>
            <button className="btn ghost" onClick={() => setEditing(img)}>Edit</button>
            <button className="btn danger" onClick={() => handleDelete(img)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}
