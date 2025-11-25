
import { Coordinates } from './types';

export const DEFAULT_LOCATION: Coordinates = {
  lat: 37.7749, // San Francisco
  lng: -122.4194
};

export const GEMINI_MODEL_FLASH = 'gemini-2.5-flash';

// Mapbox Configuration
export const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibWlja2V5MTE3IiwiYSI6ImNtaHhrZ3N6azAxc2gybXNmbmtza2ZxajkifQ.cyUp5GzCGO1YmCjHa3Xbrg";

// Supabase Configuration
export const SUPABASE_URL = 'https://putfpqxbphojihsgpcmg.supabase.co';
// Using Service Role Key for full access as requested (Development Mode)
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dGZwcXhicGhvamloc2dwY21nIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDg4MDIzNSwiZXhwIjoyMDc2NDU2MjM1fQ.SNQM1krT0QepcLmXoFmq3OXD_KUB8XKfq_xEAwmdQVo';

// Cloudflare Turnstile Configuration
// Get your Site Key from: https://dash.cloudflare.com/93d752d50a001f9e466c230abbf6f294/home/domains
export const CLOUDFLARE_SITE_KEY = '1x00000000000000000000AA'; // Currently using Testing Key. Replace with your specific Site Key for production.

// Legacy Styles (kept for reference if needed, but main map uses Mapbox)
export const DARK_MAP_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
