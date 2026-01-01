"use client"
// App.jsx
// App.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaTint, 
  FaThermometerHalf, 
  FaBatteryFull, 
  FaMapMarkerAlt, 
  FaUser, 
  FaPhone, 
  FaEnvelope,
  FaWater,
  FaTachometerAlt,
  FaRoute,
  FaSatellite,
  FaWifi,
  FaSync,
  FaHistory
} from 'react-icons/fa';

const NewDashboard = () => {
  // User Information
  const [userInfo, setUserInfo] = useState({
    name: "Karan Mishra",
    phone: "+91 9619612818",
    email: "karan.mishra@gmail.com"
  });

  // Sensor Data State
  const [sensorData, setSensorData] = useState({
    moisture: 65, // percentage
    temperature: 28.5, // celsius
    battery: 85, // percentage
    latitude: 40.7128,
    longitude: -74.0060,
    waterLevel: 72, // percentage
    speed: 25.5, // km/h
    distance: 8.5 // km
  });

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  // Fetch data from API
  const fetchApiData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://slambot-9skc.onrender.com/reciveData');
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setApiData(prevData => {
          const newData = [...data.slice(-10), ...prevData.slice(0, 10)];
          return newData.slice(0, 15); // Keep last 15 entries
        });
      }
      
      // Update sensor data with latest values from API (simulated)
      if (data.length > 0) {
        const latest = data[data.length - 1];
        setSensorData(prev => ({
          ...prev,
          moisture: latest.moisture || prev.moisture,
          temperature: latest.temperature || prev.temperature,
          battery: latest.battery || prev.battery,
          waterLevel: latest.waterLevel || prev.waterLevel,
          speed: latest.speed || prev.speed,
          distance: (prev.distance + (latest.distance || 0.1)).toFixed(1),
          latitude: latest.latitude || prev.latitude,
          longitude: latest.longitude || prev.longitude
        }));
      }
      
      setLastUpdated(new Date().toLocaleTimeString());
      setIsConnected(true);
    } catch (error) {
      console.error('Error fetching API data:', error);
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch and periodic updates
  useEffect(() => {
    fetchApiData();
    const interval = setInterval(fetchApiData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Simulate sensor data changes
  useEffect(() => {
    const sensorInterval = setInterval(() => {
      setSensorData(prev => ({
        ...prev,
        moisture: Math.min(100, Math.max(0, prev.moisture + (Math.random() - 0.5) * 2)),
        temperature: Math.min(40, Math.max(15, prev.temperature + (Math.random() - 0.5) * 0.5)),
        battery: Math.min(100, Math.max(0, prev.battery - 0.01)),
        waterLevel: Math.min(100, Math.max(0, prev.waterLevel - 0.1)),
        speed: Math.min(40, Math.max(5, prev.speed + (Math.random() - 0.5) * 3)),
        latitude: prev.latitude + (Math.random() - 0.5) * 0.001,
        longitude: prev.longitude + (Math.random() - 0.5) * 0.001
      }));
    }, 3000);

    return () => clearInterval(sensorInterval);
  }, []);

  // Format coordinate to 6 decimal places
  const formatCoordinate = (coord) => coord.toFixed(6);

  return (
    <div className="min-h-screen bg-black text-gray-100 p-4 md:p-6">
    <hr className="border border-[#222222] mb-5" />

      {/* Header */}
      {/* <header className="flex justify-between items-center pb-4 mb-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <FaSatellite className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Agri<span className="text-green-500">Sense</span></h1>
            <p className="text-gray-400 text-sm">Agricultural Monitoring System</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Last Updated</p>
            <p className="font-semibold">{lastUpdated || 'Loading...'}</p>
          </div>
          <button 
            onClick={fetchApiData}
            disabled={loading}
            className="bg-gray-800 hover:bg-    -700 px-4 py-2 rounded-lg flex items-center space-x-2 disabled:opacity-50 border border-gray-700"
          >
            <FaSync className={loading ? 'animate-spin' : ''} />
            <span>{loading ? 'Updating...' : 'Refresh'}</span>
          </button>
        </div>
      </header> */}

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Moisture Sensor Card */}
        <SensorCard 
          title="Soil Moisture"
          value={`${sensorData.moisture.toFixed(1)}%`}
          icon={<FaTint className="text-2xl" />}
          color="blue"
          progress={sensorData.moisture}
        />
        
        {/* Temperature Card */}
        <SensorCard 
          title="Temperature"
          value={`${sensorData.temperature.toFixed(1)}°C`}
          icon={<FaThermometerHalf className="text-2xl" />}
          color="red"
          progress={(sensorData.temperature / 40) * 100}
        />
        
        {/* Battery Card */}
        <SensorCard 
          title="Battery Level"
          value={`${sensorData.battery.toFixed(1)}%`}
          icon={<FaBatteryFull className="text-2xl" />}
          color="green"
          progress={sensorData.battery}
        />
        
        {/* Water Level Card */}
        <SensorCard 
          title="Water Level"
          value={`${sensorData.waterLevel.toFixed(1)}%`}
          icon={<FaWater className="text-2xl" />}
          color="cyan"
          progress={sensorData.waterLevel}
        />
        
        {/* Speed Card */}
        <div className="bg-[#111111] rounded-xl p-5 shadow-lg border-l-0 border-yellow-500">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-400 font-medium">Current Speed</h3>
            <FaTachometerAlt className="text-2xl text-yellow-500" />
          </div>
          <p className="text-3xl font-bold mb-2">{sensorData.speed.toFixed(1)} km/h</p>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                style={{ width: `${(sensorData.speed / 40) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-400">Max: 40 km/h</span>
          </div>
        </div>
        
        {/* Distance Travelled Card */}
        <div className="bg-[#111111] rounded-xl p-5 shadow-lg border-l-0 border-purple-500">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-400 font-medium">Distance Travelled</h3>
            <FaRoute className="text-2xl text-purple-500" />
          </div>
          <p className="text-3xl font-bold mb-2">{sensorData.distance} km</p>
          <p className="text-gray-400 text-sm">Total distance covered</p>
        </div>
        
        {/* GPS Coordinates Card */}
        <div className="lg:col-span-2 bg-[#111111] rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-400 font-medium flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span>GPS Coordinates</span>
            </h3>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className={`text-xs font-semibold ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#222222] rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm">Latitude</p>
                  <p className="text-xl font-mono font-bold mt-1">{formatCoordinate(sensorData.latitude)}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-900 text-green-300">
                  N
                </span>
              </div>
            </div>
            <div className="bg-[#222222] rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm">Longitude</p>
                  <p className="text-xl font-mono font-bold mt-1">{formatCoordinate(sensorData.longitude)}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-900 text-blue-300">
                  W
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-400">
            <p>📍 Location: {sensorData.latitude > 40.7 ? 'New York Area' : 'Unknown'}</p>
          </div>
        </div>
        
        {/* User Information Card */}
        <div className="lg:col-span-2 bg-[#111111] rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-400 font-medium">User Information</h3>
            <FaUser className="text-blue-500 text-xl" />
          </div>
          
          <div className="space-y-4">
            <InfoRow 
              icon={<FaUser className="text-gray-400" />}
              label="Name"
              value={userInfo.name}
            />
            <InfoRow 
              icon={<FaPhone className="text-gray-400" />}
              label="Phone"
              value={userInfo.phone}
            />
            <InfoRow 
              icon={<FaEnvelope className="text-gray-400" />}
              label="Email"
              value={userInfo.email}
            />
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-800">  
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Device Status</span>
              <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                Active & Streaming
              </span>
            </div>
          </div>
        </div>
        
        {/* Map Overview Card */}
        <div className="lg:col-span-2 bg-[#111111] rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-400 font-medium">Live Location Map</h3>
            <FaMapMarkerAlt className="text-red-500" />
          </div>
          
          <div className="relative h-64 bg-gradient-to-br from-[#222222] to-[#121212] rounded-lg overflow-hidden">
            {/* Map visualization */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 animate-pulse">
              <div className="absolute inset-0 rounded-full bg-red-400 animate-ping"></div>
            </div>
            
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute h-px bg-white w-full" style={{ top: `${i * 10}%` }}></div>
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="absolute w-px bg-white h-full" style={{ left: `${i * 10}%` }}></div>
              ))}
            </div>
            
            {/* Coordinates display on map */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded-lg">
              <p className="text-xs font-mono">
                {formatCoordinate(sensorData.latitude)}, {formatCoordinate(sensorData.longitude)}
              </p>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-[#222222] p-3 rounded-lg">
              <p className="text-gray-400">Movement Status</p>
              <p className="font-semibold text-green-400">Active</p>
            </div>
            <div className="bg-[#222222] p-3 rounded-lg">
              <p className="text-gray-400">Signal Strength</p>
              <div className="flex items-center space-x-1">
                <FaWifi className="text-green-400" />
                <span className="font-semibold">Excellent</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Real-time Data Feed Card */}
        {/* <div className="lg:col-span-2 bg-gray-900 rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <FaHistory className="text-blue-500" />
              <h3 className="text-gray-400 font-medium">Real-time Sensor Data</h3>
            </div>
            <span className="text-blue-400 text-sm font-semibold">
              API: slambot-9skc.onrender.com
            </span>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                <span>{isConnected ? 'Live' : 'Disconnected'}</span>
                {loading && <FaSync className="animate-spin" />}
              </div>
              <span className="text-xs text-gray-500">Updates every 5s</span>
            </div>
          </div>
          
          <div className="h-64 overflow-y-auto pr-2 custom-scrollbar">
            {apiData.length > 0 ? (
              <div className="space-y-2">
                {apiData.map((item, index) => (
                  <DataFeedItem 
                    key={index}
                    data={item}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <FaSync className="animate-spin text-2xl mx-auto mb-2" />
                  <p>Loading real-time data...</p>
                  <p className="text-xs mt-1">Connecting to API...</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
            <div className="flex justify-between">
              <p>Showing last {apiData.length} entries</p>
              <p>Last: {lastUpdated}</p>
            </div>
          </div>
        </div> */}
      </div>
      
    
    </div>
  );
};

// Sensor Card Component
const SensorCard = ({ title, value, icon, color, progress }) => {
  const colorClasses = {
    blue: 'border-blue-600 text-blue-500',
    red: 'border-red-600 text-red-500',
    green: 'border-green-600 text-green-500',
    cyan: 'border-cyan-600 text-cyan-500',
    yellow: 'border-yellow-600 text-yellow-500',
    purple: 'border-purple-600 text-purple-500'
  };

  return (
    <div className={`bg-[#111111] rounded-xl p-5 shadow-lg border-l-0 ${colorClasses[color]}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <div className={`${colorClasses[color].split(' ')[1]}`}>{icon}</div>
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      {progress !== undefined && (
        <div className="mt-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${colorClasses[color].split(' ')[1].replace('text-', 'bg-')} rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Info Row Component
const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 bg-[#222222] rounded-lg hover:bg-[#222222] transition-colors">
    <div className="text-lg">{icon}</div>
    <div className="flex-1">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

// Data Feed Item Component
const DataFeedItem = ({ data, index }) => {
  const timestamp = data.timestamp || new Date().toLocaleTimeString();
  
  return (
    <div className="bg-[#111111] rounded-lg p-3 hover:bg-gray-700 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-blue-400 font-mono">#{index + 1}</span>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
        {data.moisture !== undefined && (
          <div className="flex items-center space-x-1">
            <FaTint className="text-blue-400 text-xs" />
            <span className="text-gray-400">M:</span>
            <span className="font-semibold">{data.moisture}%</span>
          </div>
        )}
        
        {data.temperature !== undefined && (
          <div className="flex items-center space-x-1">
            <FaThermometerHalf className="text-red-400 text-xs" />
            <span className="text-gray-400">T:</span>
            <span className="font-semibold">{data.temperature}°C</span>
          </div>
        )}
        
        {data.battery !== undefined && (
          <div className="flex items-center space-x-1">
            <FaBatteryFull className="text-green-400 text-xs" />
            <span className="text-gray-400">B:</span>
            <span className="font-semibold">{data.battery}%</span>
          </div>
        )}
        
        {data.waterLevel !== undefined && (
          <div className="flex items-center space-x-1">
            <FaWater className="text-cyan-400 text-xs" />
            <span className="text-gray-400">W:</span>
            <span className="font-semibold">{data.waterLevel}%</span>
          </div>
        )}
      </div>
      
      {(data.speed !== undefined || data.distance !== undefined) && (
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          {data.speed !== undefined && (
            <div className="flex items-center space-x-1">
              <FaTachometerAlt className="text-yellow-400 text-xs" />
              <span className="text-gray-400">Speed:</span>
              <span className="font-semibold">{data.speed}km/h</span>
            </div>
          )}
          
          {data.distance !== undefined && (
            <div className="flex items-center space-x-1">
              <FaRoute className="text-purple-400 text-xs" />
              <span className="text-gray-400">Dist:</span>
              <span className="font-semibold">{data.distance}km</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewDashboard;