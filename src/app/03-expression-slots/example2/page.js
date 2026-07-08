import './styles.css';
/*
<div class="search-result">
  <span class="sponsored-badge">Sponsored</span>
  <p class="source">Dev Tutorials</p>
  <a class="title" href="https://example.com/react-guide">
    How to Learn React in 30 Days
  </a>
  <p class="snippet">
    A beginner-friendly guide covering components, hooks, and state management...
  </p>
  <div class="meta">
    <span class="date">Mar 14, 2025</span>
    <span class="divider">·</span>
    <span class="read-time">8 min read</span>
  </div>
</div>
*/

const searchResult = {
  id: 7,
  title: "How to Learn React in 30 Days",
  url: "https://example.com/react-guide",
  snippet: "A beginner-friendly guide covering components, hooks, and state management...",
  source: "Dev Tutorials",
  publishedDate: "2025-03-14",
  readTimeMinutes: 8,
  isSponsored: false,
};

export default function SearchResult() {
  return (
    <div className='search-result'>
      <span className="sponsored-badge">{"Sponsored"}</span>
      <p className="source">{searchResult.source}</p>
      <a className="title" href="https://example.com/react-guide">
        {searchResult.title}
      </a>
      <p className="snippet">
        {searchResult.snippet}
      </p>
      <div className="meta">
        <span className="date">{searchResult.publishedDate}</span>
        <span className="divider">·</span>
        <span className="read-time">{searchResult.readTimeMinutes}</span>

      </div>



    </div>

  );
}