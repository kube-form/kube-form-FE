import { useReducer } from 'react';

const initialFileState = {
    fileError: null,
    fileName: null,
    fileSize: null,
    fileType: null,
    fileContents: null,
};

const MAX_FILE_SIZE_BYTES = 1000000;

function bytesToMb(bytes) {
    const mb = bytes / 1000000;

    return mb;
}

export function fileChangeReducer(_state, action) {
    switch (action.type) {
        case 'FILE_CHANGE_SUCCESS': {
            return {
                fileError: null,
                fileName: action.fileName,
                fileSize: action.fileSize,
                fileType: action.fileType,
                fileContents: action.fileContents,
            };
        }
        case 'FILE_CHANGE_FAILURE': {
            return {
                ...initialFileState,
                fileError: action.fileError,
            };
        }
        case 'RESET_FILE_STATE': {
            return initialFileState;
        }
        default: {
            throw new Error(
                `Unsupported action type: ${JSON.stringify(action)}`,
            );
        }
    }
}

export function useFileChange() {
    const [
        { fileError, fileContents, fileName, fileSize, fileType },
        fileDispatch,
    ] = useReducer(fileChangeReducer, initialFileState);

    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);

        const [type] = fileObj.type.split('/');
        if (!type || type !== 'image') {
            fileDispatch({
                type: 'FILE_CHANGE_FAILURE',
                fileError: 'You can only upload image files.',
            });
            return;
        }

        if (fileObj.size > MAX_FILE_SIZE_BYTES) {
            fileDispatch({
                type: 'FILE_CHANGE_FAILURE',
                fileError: `File is too large, file size is ${bytesToMb(
                    fileObj.size,
                ).toFixed(2)} MB, maximum allowed size - 1 MB.`,
            });
            return;
        }

        // eslint-disable-next-line no-param-reassign
        event.target.value = '';

        fileDispatch({
            type: 'FILE_CHANGE_SUCCESS',
            fileName: fileObj.name,
            fileSize: fileObj.size,
            fileType: fileObj.type,
            fileContents: fileObj,
        });
    };

    return {
        fileError,
        fileContents,
        fileName,
        fileType,
        fileSize,
        handleFileChange,
        fileDispatch,
    };
}
