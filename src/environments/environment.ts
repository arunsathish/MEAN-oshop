// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD7-t9R_qTkq6YO1tfuhG98BKZ2o44U9qE',
    authDomain: 'oshop-proj.firebaseapp.com',
    databaseURL: 'https://oshop-proj.firebaseio.com',
    projectId: 'oshop-proj',
    storageBucket: 'oshop-proj.appspot.com',
    messagingSenderId: '58436156231'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
