import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="header-wrapper">
          <div className="logo"></div>
          <div className="nav">
            <p>Find Job</p>
            <p>Coaching</p>
            <p>Sign In</p>
            <button>For Employers</button>
          </div>
        </div>
      </header>
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
                  <h3>IOS Mobile Developer</h3>
                  <p>TUA Nigeria Inter-Global...</p>
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
        <button className='explore-btn'>EXPLORE ALL JOBS</button>
      </div>
      <div className="companies post-container">
        <h2>Companies recruiting from our Talent List</h2>
        <div className="companies-wrapper">
          <div className="companies-img"></div>
          <div className="companies-img2 companies-img"></div>
          <div className="companies-img3 companies-img"></div>
          <div className="companies-img4 companies-img"></div>
        </div>
        <div className="companies-wrapper companies-wrapper2">
          <div className="companies-img5 companies-img"></div>
          <div className="companies-img6 companies-img"></div>
          <div className="companies-img7 companies-img"></div>
          <div className="companies-img8 companies-img"></div>
        </div>
      </div>

      <div className="companies post-container help">
        <h2>Let’s help you stand out</h2>
        <div className="companies-wrapper help-wrapper">
          <div className="help-text">
            <h2>Join our Talent List</h2>
            <p>Create your professional profile by uploading your CV and filling a profile form</p>
            <h3>JOIN NOW -{'>'}</h3>
          </div>
          <div className="help-img"></div>
        </div>
      </div>

      <div className="companies post-container help">
        <div className="companies-wrapper help-wrapper job-wrapper">
          <div className="help-img remote-job-img"></div>
          <div className="help-text">
            <h2>Get US-based remote jobs</h2>
            <p>Finding your dream remote job just got easier. We curate and deliver top remote jobs in the US straight to your inbox</p>
            <h3>Find Jobs -{'>'}</h3>
          </div>
        </div>
      </div>

      <div className="companies post-container help">
        <div className="companies-wrapper help-wrapper">
          <div className="help-text showcase">
            <h2>Showcase your talent by taking our HR-endorsed assessment</h2>
            <p>Pass the online assessment once and for all</p>
            <h3>LEARN MORE -{'>'}</h3>
          </div>
          <div className="help-img showcase-img"></div>
        </div>
      </div>

      <div className="companies post-container help">
        <div className="companies-wrapper help-wrapper job-wrapper">
          <div className="help-img remote-job-img career-img"></div>
          <div className="help-text career">
            <h2>Career coaching</h2>
            <p>We offer periodic FREE career coaching to mid-senior level managers. We help you review your career path, optimize your CV to land bigger roles, prep you for interviews and negotiations</p>
            <h3>LEARN MORE -{'>'}</h3>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
