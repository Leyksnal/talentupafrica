import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='left-angle'></div>
      <div className="middle-content">
        <h2>Land your dream job, home and abroad</h2>
        <p>We connect you with top companies hiring talented professionals in the US and Africa</p>
        <div className="search-holder">
          <div className="input-search">
            <div className="search-icon"></div>
            <input type="text" placeholder='Job Title or Keyword' />
          </div>
          <button className='search-btn'>Search</button>
        </div>
      </div>
      <div className='right-angle'></div>
    </div>
  );
}

export default App;
