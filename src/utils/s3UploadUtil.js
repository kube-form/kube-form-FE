import AWS from 'aws-sdk';
import config from 'config';

AWS.config.update({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
});

const myBucket = new AWS.S3({
    params: { Bucket: config.aws.bucketName },
    region: config.aws.region,
});

const binArrayToJson = (binArray) => {
    let str = '';
    for (let i = 0; i < binArray.length; i += 1) {
        str += String.fromCharCode(parseInt(binArray[i], 10));
    }
    return JSON.parse(str);
};

export const putObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
        myBucket.putObject(params, (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
};

export const getObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
        myBucket.getObject(params, (err, result) => {
            console.log(params, err, result);
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
};

export const submitKubeSource = async ({ kubeSource, uid, id }) => {
    if (kubeSource && uid && id) {
        const res = await putObjectWrapper({
            ACL: 'public-read',
            Body: JSON.stringify(kubeSource),
            Bucket: config.aws.bucketName,
            Key: `kubeSources/${uid}/main.json`,
            ContentType: 'application/json',
        });
        return res;
        // .then((res) => {
        //     return res;
        // })
        // .catch((err) => {
        //     throw new Error(err);
        // });
    }
    throw new Error('not kubeSource');
};

export const getKubeSource = async ({ uid, id }) => {
    if (uid && id) {
        const { Body } = await getObjectWrapper({
            Bucket: config.aws.bucketName,
            Key: `kubeSources/${uid}/main.json`,
        });
        return binArrayToJson(Body);
        // .then((res) => {
        //     return binArrayToJson(res.Body);
        // })
        // .catch((err) => {
        //     throw new Error(err);
        // });
    }
    throw new Error('not uid');
};
