import "bootstrap";
import "mapbox-gl/dist/mapbox-gl.css";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import {initAutocomplete} from '../plugins/init_autocomplete.js'
import { initMapbox } from '../plugins/init_mapbox.js';

initMapbox();
initAutocomplete();
