// src/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your Node.js API URL
});

export const fetchDeviceData = (deviceId) => {
  return instance.get(`/api/devices/${deviceId}`);
};
export const fetchAllDeviceData = () => {
  return instance.get(`/api/devices`);
};
export const fetchPMReadings = (deviceId) => {
  return instance.get(`/api/particles/${deviceId}`);
};

export const fetchFilteredData = (startTime, endTime) => {
  return instance.get(`/api/data-by-time-range?startTime=${startTime}&endTime=${endTime}`);
};

export const uploadCSV = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return instance.post('/api/upload-csv', formData);
};
