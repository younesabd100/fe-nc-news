export function SortBy({ setSortBy }) {
  return (
    <div className="sort-dropdown">
      <button
        className="sort-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="sort-button-content">
          <span className="sort-button-text">Sort by: Best</span>
          <span className="dropdown-icon">
            <svg
              className="dropdown-arrow"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 13.02a.755.755 0 0 1-.53-.22L4.912 8.242A.771.771 0 0 1 4.93 7.2a.771.771 0 0 1 1.042-.018L10 11.209l4.028-4.027a.771.771 0 0 1 1.042.018.771.771 0 0 1 .018 1.042L10.53 12.8a.754.754 0 0 1-.53.22Z" />
            </svg>
          </span>
        </span>
      </button>

      <div className="dropdown-menu">
        <button
          onClick={() => setSortBy("created_at")}
          className="dropdown-item active"
        >
          New 🆕
        </button>
        <button
          onClick={() => setSortBy("comment_count")}
          className="dropdown-item"
        >
          Trendy 💬
        </button>
        <button onClick={() => setSortBy("votes")} className="dropdown-item">
          Best 👍
        </button>
      </div>
    </div>
  );
}
