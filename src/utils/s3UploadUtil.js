import AWS from 'aws-sdk';
import config from 'config';

AWS.config.update({
    accessKeyId: config.aws.accessKeyID,
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

export const submitOnProfileImage = async ({ profileImage, uid, id }) => {
    try {
        if (profileImage) {
            putObjectWrapper({
                Body: profileImage,
                Bucket: config.bucketName,
                Key: `${uid}/${id}`,
            })
                .then((r) => {
                    console.log(r);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    } catch (e) {
        console.log(e);
    }
};
