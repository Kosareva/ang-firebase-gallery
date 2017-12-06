// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
        production: false,
        firebase: {
            apiKey: 'AIzaSyCVErfPIsY-fnS2uPhh6yKaYXOk7e8q-OI',
            authDomain: 'ang-firebase-gallery.firebaseapp.com',
            databaseURL: 'https://ang-firebase-gallery.firebaseio.com',
            projectId: 'ang-firebase-gallery',
            storageBucket: 'ang-firebase-gallery.appspot.com',
            messagingSenderId: '741059656441'
        }
    }
;
