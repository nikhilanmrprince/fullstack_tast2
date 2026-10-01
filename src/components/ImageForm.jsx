import { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/initialImages.js';

const EMPTY = { title: '', url: '', category: '', description: '' };

function validate(values) {
  const errors = {};
  if (values.title.trim().length < 3) errors.title = 'Title must be at least 3 characters.';
  try {
    const u = new URL(values.url);
    if (!['http:', 'https:'].includes(u.protocol)) throw new Error();
  } catch {
    errors.url = 'Enter a valid image URL starting with http:// or https://';
  }
  if (!values.category) errors.category = 'Please choose a category.';
  if (values.description.length > 120) errors.description = 'Description must be 120 characters or fewer.';
  return errors;
}

export default function ImageForm({ initial, onSubmit, onCancel }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  // Fill the form when a card is chosen for editing, clear it otherwise.
  useEffect(() => {
    setValues(initial ? { title: initial.title, url: initial.url, category: initial.category, description: initial.description } : EMPTY);
    setErrors({});
  }, [initial]);

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      onSubmit({ ...values, title: values.title.trim(), description: values.description.trim() });
      setValues(EMPTY);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>{initial ? 'Edit image' : 'Add a new image'}</h2>

      <label>Title
        <input name="title" value={values.title} onChange={handleChange} placeholder="e.g. Sunset Point" />
        {errors.title && <span className="error">{errors.title}</span>}
      </label>

      <label>Image URL
        <input name="url" value={values.url} onChange={handleChange} placeholder="https://..." />
        {errors.url && <span className="error">{errors.url}</span>}
      </label>

      <label>Category
        <select name="category" value={values.category} onChange={handleChange}>
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <span className="error">{errors.category}</span>}
      </label>

      <label>Description ({values.description.length}/120)
        <textarea name="description" rows="3" value={values.description} onChange={handleChange} />
        {errors.description && <span className="error">{errors.description}</span>}
      </label>

      <div className="form-actions">
        <button className="btn" type="submit">{initial ? 'Save changes' : 'Add image'}</button>
        {initial && <button className="btn ghost" type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
