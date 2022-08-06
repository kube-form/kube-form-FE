import axios from 'axios';
import useSWR from 'swr';
import API from './base';

const getFetcher = (url) => API.get(url).then((res) => res.data);

export const getDockerImages = () => useSWR(`/dockerImages`, getFetcher);
export const putDockerImage = ({ objectKey }) =>
    API.put(`/dockerImages`, {
        objectKey,
    });
export const postDockerImage = ({ url, port, name, image }) =>
    API.post(`/dockerImages`, {
        url,
        port,
        name,
        image,
    });

export const deleteDockerImage = ({ id }) => API.delete(`/dockerImages/${id}`);

export const uploadToS3 = async ({ fileType, fileContents, objectKey }) => {
    const { data: presignedPostUrl } = await putDockerImage({ objectKey });

    const formData = new FormData();
    formData.append('Content-Type', fileType);

    formData.append('file', fileContents); // The file has be the last element

    // const response = await axios.put(presignedPostUrl.url, formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // });
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

export const getIAMUser = ({ fuid }) => useSWR(`/IAM/${fuid}`, getFetcher);

export const postIAMUser = ({ uid, accessKeyId, secretAccessKey }) =>
    API.post(`/IAM`, {
        fuid: uid,
        accessKey: accessKeyId,
        secretKey: secretAccessKey,
    });

export const deleteIAMUser = ({ fuid }) => API.delete(`/IAM/${fuid}`);

export const getInfra = () => useSWR(`/infra`, getFetcher);

export const postInfra = ({
    userId,
    accessKeyId,
    secretAccessKey,
    nodeGrouptNum,
    container,
}) =>
    API.post(`/infra`, {
        user_id: userId,
        Encrypted_Access_Key_ID: accessKeyId,
        Encrypted_Secret_Access_Key: secretAccessKey,
        node_group_num: nodeGrouptNum,
        container,
    });

export const getClusterStatus = () => useSWR(`/cluster`, getFetcher);

export const postClusterStatus = ({
    userId,
    accessKeyId,
    secretAccessKey,
    nodeGrouptNum,
    container,
}) =>
    API.post(`/cluster`, {
        user_id: userId,
        Encrypted_Access_Key_ID: accessKeyId,
        Encrypted_Secret_Access_Key: secretAccessKey,
        node_group_num: nodeGrouptNum,
        container,
    });
