import useSWR from 'swr';
import API from './base';

const getFetcher = (url) => API.get(url).then((res) => res.data);

export const getDockerImages = (fuid) =>
    useSWR(`/dockerImages/${fuid.toLowerCase()}`, getFetcher);
export const putDockerImage = ({ objectKey }) =>
    API.put(`/dockerImages`, {
        objectKey,
    });
export const postDockerImage = ({ url, port, name, image, fuid }) =>
    API.post(`/dockerImages`, {
        url,
        port,
        name,
        image,
        fuid: fuid.toLowerCase(),
    });

export const deleteDockerImage = ({ id, uid }) =>
    API.delete(`/dockerImages/${uid.toLowerCase()}/${id}`);

export const uploadToS3 = async ({ fileType, fileContents, objectKey }) => {
    const { data: presignedPostUrl } = await putDockerImage({ objectKey });

    const formData = new FormData();
    formData.append('Content-Type', fileType);

    formData.append('file', fileContents);

    const response = await fetch(
        new Request(presignedPostUrl.url, {
            method: 'PUT',
            body: fileContents,
            headers: new Headers({
                'content-Type': 'image/*',
            }),
        }),
    );

    return presignedPostUrl.filePath;
};

export const getIAMUser = ({ fuid }) =>
    useSWR(`/IAM/${fuid.toLowerCase()}`, getFetcher);

export const postIAMUser = ({ uid, accessKeyId, secretAccessKey }) =>
    API.post(`/IAM`, {
        fuid: uid.toLowerCase(),
        accessKey: accessKeyId,
        secretKey: secretAccessKey,
    });

export const deleteIAMUser = ({ fuid }) =>
    API.delete(`/IAM/${fuid.toLowerCase()}`);

export const getClusterStatus = (uid) => {
    if (!uid) {
        return { data: { status: 'not', data: {} } };
    }
    return useSWR(`/cluster/${uid.toLowerCase()}`, getFetcher);
};

export const deleteClusterStatus = async (uid) => {
    const res = await API.delete(`/cluster/${uid.toLowerCase()}`);
    console.log('delete', res);
};
