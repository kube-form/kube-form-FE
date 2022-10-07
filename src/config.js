const config = {
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
        region: process.env.REACT_APP_AWS_REGION,
        bucketName: process.env.REACT_APP_AWS_BUCKET,
        keyId: process.env.REACT_APP_AWS_KEYID,
    },
};

export default config;
