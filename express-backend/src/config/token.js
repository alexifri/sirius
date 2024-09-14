import axios from 'axios';
import qs from 'qs';
import "dotenv/config";

const tokenInstance = axios.create({
  baseURL: "https://identity.dataspace.copernicus.eu",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
});

export const getToken = async () => {
    const client_id = 'sh-844015d3-1f73-498a-9bcd-5f52baefad5e';
    const client_secret = 'CvOrjreo0Z0mSXEl6fZfjivwRBXciLCv';
  const body = qs.stringify({
    client_id,
    client_secret,
    grant_type: "client_credentials"
  });

  try {
    const response = await tokenInstance.post('/auth/realms/CDSE/protocol/openid-connect/token', body);
    return response.data.access_token;
  } catch (error) {
    // Log the full error response
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }
    throw new Error(`Failed to retrieve token: ${error.message}`);
  }
};