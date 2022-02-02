import './App.css';

function App() {
  return (
    <div>
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
      
      <div className="post">
        <div className="post-container">
          <h2>Recently posted jobs</h2>
          <div className="jobs-col">
            <div className="job">
              <div className="job-img1"></div>
              <div className="job-info">
                <h3>Programmer</h3>
                <p>nol</p>
                <span>Lagos</span>
                <div className="sub">
                  <p>5 months ago</p>
                  <button>APPLY</button>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="job-img2"></div>
              <div className="job-info">
                <h3>Influencer & Community...</h3>
                <p>Reliance HMO Limited</p>
                <span>Lagos</span>
                <div className="sub">
                  <p>5 months ago</p>
                  <button>APPLY</button>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="job-img3"></div>
              <div className="job-info">
                <h3>Backend Engineer</h3>
                <p>Kobo 360 (Kobo Logistics...</p>
                <span>Lagos</span>
                <div className="sub">
                  <p>5 months ago</p>
                  <button>APPLY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post below">
          <div className="post-container">
            <h2>Explore US-based jobs</h2>
            <div className="jobs-col single-col">
              <div className="job">
                <div className="job-img1"></div>
                <div className="job-info">
                  <h3>Programmer</h3>
                  <p>nol</p>
                  <span>Lagos</span>
                  <div className="sub">
                    <p>5 months ago</p>
                    <button>APPLY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
