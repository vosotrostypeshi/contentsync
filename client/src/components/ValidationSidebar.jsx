
const PLATFORM_LIMITS = {
  Twitter: 280,
  LinkedIn: 3000,
  Facebook: 63206,
  Instagram: 2200
};

const ValidationSidebar = ({ content, selectedPlatforms, mediaFiles, status }) => {
  const getTwitterProgress = () => {
    if (selectedPlatforms.includes('Twitter')) {
      const limit = PLATFORM_LIMITS.Twitter;
      const length = content.length;
      const pct = Math.min((length / limit) * 100, 100);
      return { length, limit, pct };
    }
    return null;
  };

  const getInstagramStatus = () => {
    if (selectedPlatforms.includes('Instagram')) {
      return mediaFiles.length > 0 ? 'Optimal' : 'Media Required';
    }
    return null;
  };

  const getLinkedInStatus = () => {
    if (selectedPlatforms.includes('LinkedIn')) {
      return 'Optimal';
    }
    return null;
  };

  const twitterData = getTwitterProgress();
  const instagramStatus = getInstagramStatus();
  const linkedInStatus = getLinkedInStatus();

  return (
    <aside className="sidebar">
      <section className="vellum overprint-magenta data-card">
        <h3>Validation_Logic</h3>
        
        {twitterData && (
          <>
            <div className="stat-row">
              <span>Twitter Limit</span>
              <span className="stat-val">{twitterData.length} / {twitterData.limit}</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${twitterData.pct}%`, background: 'var(--cyan)' }}></div>
            </div>
            <div style={{ marginTop: '25px' }}></div>
          </>
        )}

        {instagramStatus && (
          <>
            <div className="stat-row">
              <span>Instagram Requirement</span>
              <span className="stat-val" style={{ color: instagramStatus === 'Optimal' ? 'var(--cyan)' : 'var(--magenta)' }}>{instagramStatus}</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: instagramStatus === 'Optimal' ? '100%' : '0%', background: instagramStatus === 'Optimal' ? 'var(--yellow)' : 'var(--magenta)' }}></div>
            </div>
            <div style={{ marginTop: '25px' }}></div>
          </>
        )}

        {linkedInStatus && (
          <>
            <div className="stat-row">
              <span>LinkedIn Status</span>
              <span className="stat-val">{linkedInStatus}</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '100%', background: 'var(--yellow)' }}></div>
            </div>
          </>
        )}

        {selectedPlatforms.length === 0 && (
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'var(--text-dim)' }}>
            Select platforms to see validation
          </div>
        )}
      </section>

      <section className="vellum data-card" style={{ flexGrow: '1', borderTop: '4px solid var(--yellow)' }}>
        <h3>Data_Schema</h3>
        <div style={{ fontSize: '11px', lineHeight: '2', color: 'var(--text-dim)' }}>
          <span style={{ color: 'var(--yellow)' }}>{`{`}</span><br />
          &nbsp;&nbsp;"_id": "64f1e...",<br />
          &nbsp;&nbsp;"content": "{content.slice(0, 20)}{content.length > 20 ? '...' : ''}",<br />
          &nbsp;&nbsp;"platforms": {JSON.stringify(selectedPlatforms)},<br />
          &nbsp;&nbsp;"status": "{status || 'draft'}",<br />
          &nbsp;&nbsp;"validation": {`{`}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;"passed": true,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;"warnings": {selectedPlatforms.includes('Instagram') && mediaFiles.length === 0 ? '1' : '0'}<br />
          &nbsp;&nbsp;{`}`}<br />
          <span style={{ color: 'var(--yellow)' }}>{`}`}</span>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          <h3>Stack_Trace</h3>
          <ul style={{ listStyle: 'none', fontSize: '11px', color: 'var(--text-main)' }}>
            <li style={{ marginBottom: '8px' }}>— Express.js Router: <span style={{ color: 'var(--cyan)' }}>POST /api/posts</span></li>
            <li style={{ marginBottom: '8px' }}>— Mongoose: <span style={{ color: 'var(--cyan)' }}>Schema.save()</span></li>
            <li style={{ marginBottom: '8px' }}>— Validation: <span style={{ color: 'var(--cyan)' }}>Middleware.verify()</span></li>
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default ValidationSidebar;

