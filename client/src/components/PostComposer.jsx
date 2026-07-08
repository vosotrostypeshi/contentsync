
import { useState, useEffect } from 'react';
import PlatformSelector from './PlatformSelector.jsx';
import MediaUploader from './MediaUploader.jsx';
import SubmitButton from './SubmitButton.jsx';
import ValidationSidebar from './ValidationSidebar.jsx';
import { createPost } from '../services/api.js';

const PLATFORMS = ['Twitter', 'Instagram', 'LinkedIn', 'Facebook'];

const PostComposer = () => {
  const [content, setContent] = useState('Designing for the future requires a balance of translucency and structure. #FlashUI #DesignSystem');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['Twitter', 'LinkedIn']);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Ready');

  const handleSubmit = async () => {
    setLoading(true);
    setStatus('Publishing...');
    try {
      const formData = new FormData();
      formData.append('content', content);
      formData.append('platforms', JSON.stringify(selectedPlatforms));
      formData.append('characterCount', content.length);
      formData.append('status', 'Published');

      mediaFiles.forEach(file => {
        formData.append('media', file);
      });

      await createPost(formData);
      setStatus('Published');
      setTimeout(() => setStatus('Ready'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('Error');
      setTimeout(() => setStatus('Ready'), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = () => {
    setStatus('Draft Saved');
    setTimeout(() => setStatus('Ready'), 3000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const layers = document.querySelectorAll('.vellum');
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      
      layers.forEach((layer, index) => {
        const depth = (index + 1) * 2;
        layer.style.transform = `translateX(${x * depth}px) translateY(${y * depth}px)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="stage">
      <main className="vellum overprint-cyan composer">
        <div className="layer-decoration top-right">REF_ID: #8809-XQ // LAYER_01</div>
        
        <div className="header-group">
          <div>
            <div className="sys-info" style={{ textAlign: 'left', marginBottom: '8px' }}>MERN_STACK // REST_API_V1</div>
            <h1>Composer</h1>
          </div>
          <div className="sys-info">
            STATUS: {status}<br />
            LATENCY: 42MS<br />
            DB: MONGODB_CONNECTED
          </div>
        </div>

        <div className="input-wrapper">
          <textarea 
            placeholder="Start typing your narrative..." 
            spellCheck="false"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <PlatformSelector
          platforms={PLATFORMS}
          selectedPlatforms={selectedPlatforms}
          onChange={setSelectedPlatforms}
        />

        <MediaUploader
          files={mediaFiles}
          onChange={setMediaFiles}
        />

        <div className="actions">
          <button className="btn btn-secondary" onClick={handleSaveDraft}>Save Draft</button>
          <SubmitButton
            onClick={handleSubmit}
            loading={loading}
          />
        </div>
        
        <div className="layer-decoration bottom-left">CORE: REACT.JS / NODE.JS / EXPRESS</div>
      </main>

      <ValidationSidebar 
        content={content}
        selectedPlatforms={selectedPlatforms}
        mediaFiles={mediaFiles}
        status={status}
      />
    </div>
  );
};

export default PostComposer;
