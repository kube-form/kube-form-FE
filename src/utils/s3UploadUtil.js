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

export const putObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line func-names
        myBucket.putObject(params, function (err, result) {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
};

export const submitKubeSource = async ({ kubeSource, uid, id }) => {
    if (kubeSource) {
        putObjectWrapper({
            ACL: 'public-read',
            Body: JSON.stringify(kubeSource),
            Bucket: config.bucketName,
            Key: `kubeSources/${uid}/main.json`,
            ContentType: 'application/json',
        })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                throw new Error(err);
            });
    }
};
