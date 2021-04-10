import L from 'leaflet';
import venueIcon from '../assets/location-icon.png';

export const VenueLocationIcon = L.icon({
  iconUrl: venueIcon,
  iconSize: [35, 35],
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});
