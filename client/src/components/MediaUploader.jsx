
import { useRef } from 'react';

const MediaUploader = ({ files, onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    onChange([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <div 
        className="media-drop" 
        onClick={() => fileInputRef.current.click()}
      >
        [ Drag + Drop Media Assets ]
        <div style={{ fontSize: '9px', marginTop: '10px', opacity: '0.6' }}>PNG, JPG, MP4 UP TO 50MB</div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {files.length > 0 && (
        <div style={{ marginTop: '20px', fontFamily: 'JetBrains Mono', fontSize: '11px', color: 'var(--text-dim)' }}>
          Selected files:
          {files.map((file, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <span>{file.name}</span>
              <span 
                style={{ color: 'var(--magenta)', cursor: 'pointer' }}
                onClick={() => removeFile(index)}
              >×</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MediaUploader;
