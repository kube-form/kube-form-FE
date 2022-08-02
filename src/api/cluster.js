import axios from 'axios';
import useSWR from 'swr';
import API from './base';

const getFetcher = (url) => API.get(url).then((res) => res.data);
const putFetcher = (url) => API.get(url).then((res) => res.data);

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
