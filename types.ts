
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  address: string;
  coordinates: Coordinates;
  rating?: number;
  userRatingsTotal?: number;
  description?: string;
  sourceUrl?: string;
}

export interface Source {
  title: string;
  url: string;
  sourceType: 'web' | 'map';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  places?: Place[]; 
  sources?: Source[]; // Grounding sources (Google Search/Maps)
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  contributionScore?: number;
  milesDriven?: number;
}

export interface RouteStep {
  instruction: string;
  distance: number;
  duration: number;
  maneuver: {
    location: [number, number];
    type: string;
    modifier?: string;
  };
  speedLimit?: number;
  speedLimitUnit?: string;
}

export interface NavigationRoute {
  geometry: any; // GeoJSON LineString
  duration: number;
  distance: number;
  steps: RouteStep[];
}

export interface CommuteDestination {
  id: string;
  name: string; // e.g., "Home", "Work"
  address: string;
  coordinates: Coordinates;
  travelMode: 'driving' | 'walking' | 'cycling';
  latestDuration?: number; // in seconds
  latestDistance?: number; // in meters
}

export interface MapAction {
  type: 'CENTER' | 'DRAW_ROUTE' | 'MARKER' | 'SEARCH_RESULTS' | 'ROUTE_OPTIONS' | 'USER_UPDATE' | 'ERROR' | 'READY';
  payload: any;
}

export interface GeminiResponse {
  text: string;
  places: Place[];
  sources: Source[];
  mapAction?: MapAction;
}

export enum MapMode {
  EXPLORE = 'EXPLORE',
  NAVIGATION = 'NAVIGATION'
}

export enum AppView {
  MAP = 'MAP',
  PROFILE = 'PROFILE',
  COMMUTES = 'COMMUTES'
}

export enum ReportType {
  POLICE = 'POLICE',
  ACCIDENT = 'ACCIDENT',
  HAZARD = 'HAZARD',
  TRAFFIC = 'TRAFFIC'
}

export enum MapStyle {
  NAVPAL = 'mapbox://styles/mickey117/cmi80vb9d000r01qqg3g6dqhu',
  DARK = 'mapbox://styles/mapbox/dark-v11',
  STREET = 'mapbox://styles/mapbox/streets-v12',
  SATELLITE = 'mapbox://styles/mapbox/satellite-streets-v12',
  NAVIGATION = 'mapbox://styles/mapbox/navigation-night-v1'
}

export interface MapReport {
  id: string;
  type: ReportType;
  coordinates: Coordinates;
  timestamp: number;
}

export interface AppState {
  user: User | null;
  currentLocation: Coordinates | null;
  selectedPlace: Place | null;
  activeRoute: NavigationRoute | null;
  messages: ChatMessage[];
  isSidebarOpen: boolean;
  mapMode: MapMode;
}

// Speech Recognition Types
declare global {
  interface SpeechRecognitionEvent extends Event {
    readonly results: SpeechRecognitionResultList;
    readonly resultIndex: number;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start(): void;
    stop(): void;
    abort(): void;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: any) => void;
    onend: () => void;
  }

  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
    turnstile: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    }
  }
}
