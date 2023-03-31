import React from 'react';

function Podcast() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
      <div>
        <h2>Podcast Page</h2>
        <button className="btn btn-success">
          <a
            href="https://baconsale.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            Baconsale Podcast
          </a>
        </button>

        <div style={{ width: '100%', maxWidth: '800px', height: '100vh' }}>
          <iframe
            title="baconsale"
            src="https://baconsale.com/"
            width="200%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
