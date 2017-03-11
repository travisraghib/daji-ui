export const STORAGE_KEY = {
  version        : 'sk:v',
  searchFilter   : 'sk:sf',
  clientLocation : 'sk:cl',
  profile        : 'sk:p',
  user           : 'sk:u',
  registered     : 'sk:r',
  token          : 'sk:t'
}

export const USER_OBJECT_TEMPLATE = {
  visitorID : '',
  userInfo  : {},
  saved     : [],
  reviewed  : {}
}

export const CLIENT_LOCATION_DEFAULT = {
  city       : 'San Francisco',
  state      : 'California',
  coordinate : {
    lat : 37.7939358,
    lng : -122.39555919999998
  }
}

export const MAP = {
  marker                 : {
    red  : 'assets/images/marker-red.png',
    blue : 'assets/images/marker-blue.png'
  },
  googleMapOptionDefault : {
    scrollwheel        : false,
    mapTypeControl     : false,
    panControl         : false,
    streetViewControl  : false,
    zoomControlOptions : {
      style : {
        SMALL : true
      }
    }
  }
}

export const ALERT_DEFAULT = {
  init : true
}

export const USER_API : string = 'api/user';

export const AUTH_API : string = 'api/auth/local';

export const LOCATION_API : string = 'api/location';

export const VENDOR_API : string = 'api/vendor';

export const VENDOR_MENU_API : string = 'api/vendor/menu';

export const EXTERNAL_LIBRARY_LIST = [
  { name : 'googleMaps', url : 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHvD5HHGGVK273a9AqVm5FXMWo_vB09Ho' }
]

export const GEOLOCATION_MSGS = {
  'errors.location.unsupportedBrowser'  : 'Browser does not support location services',
  'errors.location.permissionDenied'    : 'You have rejected access to your location',
  'errors.location.positionUnavailable' : 'Unable to determine your location',
  'errors.location.timeout'             : 'Service timeout has been reached'
}

export const GEOLOCATION_LOADING_ALERT = {
  type      : 'alert-warning',
  header    : 'One moment please: ',
  message   : 'We\'re getting that for you right now',
  durration : 6000
}

export const LOADING_ALERT = {
  type    : 'alert-info',
  header  : 'One moment please: ',
  message : 'Loading.'
}

export const AUTH_ERROR_ALERT = {
  type      : 'alert-danger',
  header    : 'Invalid Credentials: ',
  message   : 'Please try again.',
  durration : 3000
}

export const FIREBASE_CONFIG = {
  apiKey            : "AIzaSyDAGJwDy6oJey8kYwCcuyBxntw3kJRx2CE",
  authDomain        : "daji-dev.firebaseapp.com",
  databaseURL       : "https://daji-dev.firebaseio.com",
  storageBucket     : "daji-dev.appspot.com",
  messagingSenderId : "548173340477"
}

export let CROPPER_OPTIONS = {
  preview                  : '.img-preview',
  viewMode                 : 5,
  aspectRatio              : 1,
  autoCropArea             : 0.65,
  dragMode                 : 'move',
  restore                  : false,
  modal                    : false,
  guides                   : true,
  highlight                : true,
  cropBoxMovable           : true,
  cropBoxResizable         : true,
  toggleDragModeOnDblclick : false,
  zoomable                 : false,
  ready                    : function (e) {
    console.log(e.type);
  },
  cropstart                : function (e) {
    console.log(e.type, e.detail.action);
  },
  cropmove                 : function (e) {
    console.log(e.type, e.detail.action);
  },
  cropend                  : function (e) {
    console.log(e.type, e.detail.action);
  },
  crop                     : function (e) {
    var data = e.detail;
  },
  zoom                     : function (e) {
    console.log(e.type, e.detail.ratio);
  }
};


  
  