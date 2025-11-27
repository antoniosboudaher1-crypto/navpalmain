import { Coordinates } from './types';

export const DEFAULT_LOCATION: Coordinates = {
  lat: 37.7749, // San Francisco
  lng: -122.4194
};

export const GEMINI_MODEL_FLASH = 'gemini-2.5-flash';

// Mapbox Configuration - Use environment variable
export const MAPBOX_ACCESS_TOKEN = process.env.VITE_MAPBOX_TOKEN || '';

// Supabase Configuration - Use environment variables
export const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://putfpqxbphojihsgpcmg.supabase.co';
export const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_KEY || '';

// Cloudflare Turnstile Configuration - Use environment variable
export const CLOUDFLARE_SITE_KEY = process.env.VITE_CLOUDFLARE_SITE_KEY || '';

// Legacy Styles (kept for reference if needed, but main map uses Mapbox)
export const DARK_MAP_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';