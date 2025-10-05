// pages/index.js or app/page.js
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, useGLTF } from '@react-three/drei';
import Head from 'next/head';
import {
  Compass,
  Camera,
  Cpu,
  Droplet,
  Monitor,
  Wifi,
  Zap,
} from "lucide-react";
import IconCard from './IconCard'
// 3D Model Component using your custom model
function Model({ modelPath, scale = 2, position = [0, 0, 0] }) {
  const { scene, error } = useGLTF(modelPath);
  const modelRef = useRef();

  // Add error handling
  if (error) {
    console.error('Error loading 3D model:', error);
    return null;
  }

  // Add loading check
  if (!scene) {
    console.log('Loading 3D model...');
    return null;
  }

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2; // Slow rotation
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale}
      position={position}
      castShadow
      receiveShadow
    />
  );
}

// Alternative: Simple 3D scene as fallback
function FallbackScene() {
  const boxRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += delta * 0.5;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={boxRef} position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4f46e5" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={sphereRef} position={[2, 0, 0]} castShadow>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#10b981" roughness={0.3} metalness={0.7} />
        </mesh>
      </Float>
    </>
  );
}

// Main Scene Component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[10, 10, 5]} 
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.8} color="#4f46e5" />
      <pointLight position={[5, -5, 5]} intensity={0.6} color="#10b981" />
      
      {/* Import your custom model here */}
      <Suspense fallback={<FallbackScene />}>
        <Model 
          modelPath="/Models/SlamBottt.glb" // Change this path to your model
          scale={3} // Adjust scale as needed
          position={[0, -2, 0]} // Adjust position as needed
        />
      </Suspense>
      
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        maxPolarAngle={Math.PI} // Allow full rotation
        minDistance={1}
        maxDistance={15}
        target={[0, 0, 0]}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3>Model Loading Error</h3>
          <p>Failed to load the 3D model. Please check the console for details.</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Fallback
function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading 3D Model...</p>
      <p className="loading-details">This may take a moment...</p>
    </div>
  );
}

// Preload model for better performance
useGLTF.preload('/Models/SlamBottt.glb');

export default function HomePage() {
  return (
    <>
      <Head>
        <title>3D Model Showcase | Custom Model</title>
        <meta name="description" content="Display your custom 3D model with React Three Fiber" />
      </Head>
      
      <div className="container">
        {/* Left Content Section */}
        <div className="content-section">
          <div className="content-wrapper">
            <h1 className="title">Slam Bot Architecture</h1>
            <p className="subtitle">
              AgroSmart SLAMBot for Farming in Hilly Terrains   
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                    <IconCard Icon={Compass} title="" />
                </div>
                <h3>SLAM Navigation Core</h3>
                <p>Demonstrates real-time farm mapping and autonomous path planning using advanced LiDAR and sensor fusion.  </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                     <IconCard Icon={Cpu} title="" />
                    
                </div>
                <h3>AI Crop Analysis</h3>
                <p>Leverages onboard cameras and AI models to detect crop health, growth stages, and diseases instantly. </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                    <IconCard Icon={Camera} title="" />
                </div>
                <h3>Precision Irrigation System</h3>
                <p>Controls multi-zone irrigation nozzles using soil moisture, crop type, and weather inputs for water efficiency.  </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                    <IconCard Icon={Droplet} title="" />
                </div>
                <h3>Remote Control & Monitoring</h3>
                <p>Access the bot’s live data, operational maps, and telemetry via a secure web dashboard or mobile app. </p>
              </div>
            </div>
            
            
            <div className="cta-section">
              <button className="primary-btn" onClick={() => window.open('https://threejs.org/docs/#examples/en/loaders/GLTFLoader', '_blank')}>
                Structure Documentation
              </button>
              <button className="secondary-btn" onClick={() => window.open('https://github.com/atulmehta2002/slambot', '_blank')}>
                GitHub Repository
              </button>
            </div>
          </div>
        </div>
        
        {/* Right 3D Model Section */}
        <div className="model-section">
          <div className="model-container">
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Canvas
                  shadows
                  camera={{ position: [8, 4, 8], fov: 45 }}
                  gl={{ 
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                  }}
                  onCreated={({ gl, scene, camera }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = 2; // PCFSoftShadowMap
                    gl.toneMappingExposure = 1.2;
                    console.log('Canvas created successfully');
                  }}
                >
                  <Scene />
                </Canvas>
              </Suspense>
            </ErrorBoundary>
          </div>
       
        </div>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          width: 100vw;
        }

        .content-section {
          padding: 2rem;
          background: linear-gradient(135deg, #000000ff 0%, #151515ff 100%);
          color: white;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .content-wrapper {
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 3rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .feature-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .feature-card p {
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.5;
        }

        .description-section {
          margin-bottom: 2rem;
        }

        .description-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .description-section p {
          line-height: 1.6;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .instructions-list, .supported-formats ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .instructions-list li, .supported-formats li {
          margin-bottom: 0.5rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        code {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        .supported-formats {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 1.5rem;
        }

        .supported-formats h3 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .cta-section {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .primary-btn, .secondary-btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

         .primary-btn {
           background: orange;
           color: white;
         }

        .primary-btn:hover {
          background: orangered;
          transform: translateY(-2px);
        }

        .secondary-btn {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .secondary-btn:hover {
          border-color: white;
          transform: translateY(-2px);
        }

        .model-section {
          display: flex;
          flex-direction: column;
          background: #1a1a1a;
        }

        .model-container {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .model-instructions {
          padding: 1rem;
          text-align: center;
          background: #2d2d2d;
          color: #ccc;
          font-size: 0.9rem;
        }

        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #ccc;
          text-align: center;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #333;
          border-top: 4px solid #4f46e5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        .loading-details {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-top: 0.5rem;
        }

        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #ccc;
          text-align: center;
          padding: 2rem;
        }

        .error-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .error-container h3 {
          color: #ff6b6b;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .error-container p {
          margin-bottom: 1.5rem;
          opacity: 0.8;
          max-width: 400px;
        }

        .retry-btn {
          padding: 0.75rem 1.5rem;
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .retry-btn:hover {
          background: #3730a3;
          transform: translateY(-2px);
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            min-height: auto;
          }
          
          .content-section {
            padding: 1.5rem;
          }
          
          .title {
            font-size: 2.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .model-section {
            min-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .content-section {
            padding: 1rem;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .cta-section {
            flex-direction: column;
          }
          
          .features-grid {
            gap: 1rem;
          }
          
          .feature-card {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.75rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}