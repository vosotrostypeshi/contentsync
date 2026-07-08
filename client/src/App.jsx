
import './index.css';
import PostComposer from './components/PostComposer';

function App() {
  return (
    <>
      <svg className="grain">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>
      <PostComposer />
    </>
  );
}

export default App;

