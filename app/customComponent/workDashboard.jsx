// components/Dashboard.jsx
"use client"

import { useState, useEffect } from 'react';
import {
  FiWifi, FiWifiOff, FiThermometer, FiDroplet,
  FiCpu, FiPower, FiRefreshCw, FiArrowUp,
  FiArrowDown, FiToggleLeft, FiClock, FiInfo,
  FiMapPin, FiBattery, FiSun, FiNavigation,
  FiActivity, FiGlobe
} from 'react-icons/fi';
import {
  WiHumidity
} from 'react-icons/wi';
import {
  MdWaterDrop, MdSpeed, MdLocationPin,
  MdDirectionsCar, MdOutlineWater, MdThermostat
} from 'react-icons/md';

const Dashboard = () => {
  const [gpioState, setGpioState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [error, setError] = useState(null);
  const [sensorData, setSensorData] = useState(null);

  // Mock data based on your image
  const mockData = {
    soilPercent: 65.0,
    soilRaw: 512,
    temperature: 28.5,
    humidity: 45,
    gpioState: false,
    timestamp: Date.now(),
    currentSpeed: 25.5,
    maxSpeed: 40,
    distance: 8.5,
    battery: 85.0,
    waterLevel: 72.0,
    gps: {
      lat: 49.712800,
      lng: -74.906000,
      location: 'New York Area'
    }
  };

  const ESP32_IP = 'http://10.181.56.67';

  const fetchSensorData = async () => {
    try {
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const data = mockData;
      
      setSensorData(data);
      setGpioState(data.gpioState);
      setLastUpdated(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching sensor data:', err.message);
      
      setSensorData(mockData);
      setGpioState(false);
      setLastUpdated(new Date().toLocaleTimeString() + ' (Demo Mode)');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData();
    
    const intervalId = setInterval(() => {
      fetchSensorData();
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchSensorData().finally(() => setRefreshing(false));
  };

  const sendCommand = async (action) => {
    setActionLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (action === 'HIGH') setGpioState(true);
      if (action === 'LOW') setGpioState(false);
      if (action === 'TOGGLE') setGpioState(!gpioState);
      
      console.log(`${action} command successful`);
      
      alert(`GPIO5 set to ${action}`);
      
    } catch (err) {
      console.error(`Error sending ${action} command:`, err);
      alert(`Failed to set GPIO to ${action}`);
    } finally {
      setActionLoading(false);
    }
  };

  const handleHigh = () => sendCommand('HIGH');
  const handleLow = () => sendCommand('LOW');
  const handleToggle = () => sendCommand(gpioState ? 'LOW' : 'HIGH');

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <FiCpu className="text-6xl text-cyan-500 animate-pulse mx-auto mb-6" />
          <div className="text-2xl text-white mb-2">Connecting to ESP32...</div>
          <div className="text-gray-400">{ESP32_IP}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-900 rounded-xl">
            <FiCpu className="text-2xl text-cyan-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">IoT Dashboard</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiClock size={14} />
              <span>Last Update: {lastUpdated}</span>
              {error && (
                <span className="text-red-400 ml-4 flex items-center gap-1">
                  <FiWifiOff size={14} />
                  {error}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
            <FiWifi className={`text-lg ${error ? 'text-red-500' : 'text-green-500'}`} />
            <span className="text-sm">{error ? 'Disconnected' : 'Connected'}</span>
          </div>
          
          <button
            onClick={onRefresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors disabled:opacity-50"
          >
            <FiRefreshCw className={`${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column - Soil & Temperature */}
        <div className="col-span-3 space-y-6">
          {/* Soil Moisture */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <MdWaterDrop className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Soil Moisture</h3>
              </div>
              <div className="text-2xl font-bold text-blue-300">{sensorData?.soilPercent}%</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  style={{ width: `${sensorData?.soilPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-900/30 rounded-lg">
                  <FiThermometer className="text-2xl text-red-400" />
                </div>
                <h3 className="text-lg font-semibold">Temperature</h3>
              </div>
              <div className="text-2xl font-bold text-red-300">{sensorData?.temperature}°C</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>0°C</span>
                <span>25°C</span>
                <span>50°C</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                  style={{ width: `${(sensorData?.temperature / 50) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Battery Level */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-900/30 rounded-lg">
                  <FiBattery className="text-2xl text-green-400" />
                </div>
                <h3 className="text-lg font-semibold">Battery Level</h3>
              </div>
              <div className="text-2xl font-bold text-green-300">{sensorData?.battery}%</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  style={{ width: `${sensorData?.battery}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Controls & Speed */}
        <div className="col-span-6 space-y-6">
          {/* GPIO Control Panel */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-900/30 rounded-lg">
                  <FiPower className="text-2xl text-purple-400" />
                </div>
                <h2 className="text-xl font-bold">GPIO Control Panel</h2>
              </div>
              
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${gpioState ? 'bg-green-900/30' : 'bg-gray-800'}`}>
                <div className={`w-3 h-3 rounded-full ${gpioState ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className={gpioState ? 'text-green-400' : 'text-gray-400'}>
                  {gpioState ? 'ACTIVE' : 'INACTIVE'}
                </span>
              </div>
            </div>
            
            {/* GPIO Status Display */}
            <div className={`p-8 rounded-xl text-center mb-8 transition-all duration-300 ${
              gpioState ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-800/50' : 'bg-gray-800/50 border border-gray-700'
            }`}>
              <div className={`text-8xl mb-4 transition-all duration-300 ${
                gpioState ? 'text-green-500 animate-pulse' : 'text-gray-600'
              }`}>
                {gpioState ? '⚡' : '○'}
              </div>
              <div className={`text-3xl font-bold mb-2 ${
                gpioState ? 'text-green-400' : 'text-gray-400'
              }`}>
                GPIO5: {gpioState ? 'HIGH (3.3V)' : 'LOW (0V)'}
              </div>
              <div className="text-gray-500">
                {gpioState ? 'Output Active | Power ON' : 'Output Inactive | Power OFF'}
              </div>
            </div>
            
            {/* Control Buttons */}
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={handleHigh}
                disabled={actionLoading || gpioState}
                className="bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiArrowUp className="text-3xl" />
                <div className="text-center">
                  <div className="text-lg font-bold">SET HIGH</div>
                  <div className="text-sm opacity-90">Turn ON (3.3V)</div>
                </div>
              </button>
              
              <button
                onClick={handleLow}
                disabled={actionLoading || !gpioState}
                className="bg-gradient-to-br from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiArrowDown className="text-3xl" />
                <div className="text-center">
                  <div className="text-lg font-bold">SET LOW</div>
                  <div className="text-sm opacity-90">Turn OFF (0V)</div>
                </div>
              </button>
              
              <button
                onClick={handleToggle}
                disabled={actionLoading}
                className="bg-gradient-to-br from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiToggleLeft className="text-3xl" />
                <div className="text-center">
                  <div className="text-lg font-bold">TOGGLE</div>
                  <div className="text-sm opacity-90">
                    Switch to {gpioState ? 'LOW' : 'HIGH'}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Speed & Distance */}
          <div className="grid grid-cols-2 gap-6">
            {/* Current Speed */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900/30 rounded-lg">
                    <MdSpeed className="text-2xl text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Current Speed</h3>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-blue-300">{sensorData?.currentSpeed}</div>
                <div className="text-gray-400">km/h</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Max: {sensorData?.maxSpeed} km/h</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    style={{ width: `${(sensorData?.currentSpeed / sensorData?.maxSpeed) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Distance Travelled */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-900/30 rounded-lg">
                    <MdDirectionsCar className="text-2xl text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Distance Travelled</h3>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-purple-300">{sensorData?.distance}</div>
                <div className="text-gray-400">km</div>
              </div>
              
              <div className="text-sm text-gray-500 text-center">
                Total distance covered
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - GPS, Water, Info */}
        <div className="col-span-3 space-y-6">
          {/* GPS Coordinates */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-900/30 rounded-lg">
                <FiMapPin className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold">GPS Coordinates</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Latitude</div>
                <div className="text-xl font-mono text-cyan-300">{sensorData?.gps.lat}</div>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Longitude</div>
                <div className="text-xl font-mono text-cyan-300">{sensorData?.gps.lng}</div>
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-lg text-white">{sensorData?.gps.location}</div>
              </div>
            </div>
          </div>

          {/* Water Level */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-900/30 rounded-lg">
                  <MdOutlineWater className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">Water Level</h3>
              </div>
              <div className="text-2xl font-bold text-cyan-300">{sensorData?.waterLevel}%</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  style={{ width: `${sensorData?.waterLevel}%` }}
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-900/30 rounded-lg">
                <FiInfo className="text-2xl text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold">Contact Information</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Name</div>
                <div className="text-lg text-white font-semibold">Anup Mishra</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Phone</div>
                <div className="text-lg text-white">+91 6969696999</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div className="text-lg text-white">karan.mishra@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiActivity className="text-green-500" />
              <span>System Status: Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe className="text-cyan-500" />
              <span>ESP32 IP: {ESP32_IP}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <FiSun className="text-amber-500" />
            <span>Lighting: Information</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FiNavigation className="text-purple-500" />
            <span>Map Location: 48.712890, -74.906000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;