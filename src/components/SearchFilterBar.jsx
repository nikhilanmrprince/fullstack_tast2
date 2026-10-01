import { CATEGORIES } from '../data/initialImages.js';

export default function SearchFilterBar({ search, setSearch, category, setCategory, sort, setSort }) {
  return (
    <div className="toolbar">
      <input
        type="search"
        placeholder="Search by title or description"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search images"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
        <option value="All">All categories</option>
        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort images">
        <option value="newest">Newest first</option>
        <option value="title">Title A-Z</option>
      </select>
    </div>
  );
}
