const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '',
    defaultPath: '/dashboard/default',
    loginPath: `/pages/login/login3`,
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12,

    API_URL: process.env.REACT_APP_PROXY,
    firebase: {
        apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSGINGSENDERID,
        appId: process.env.REACT_APP_FIREBASE_APPID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
    },

    aws: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
        keyId: process.env.REACT_APP_AWS_KEYID,
    },
};

export default config;
