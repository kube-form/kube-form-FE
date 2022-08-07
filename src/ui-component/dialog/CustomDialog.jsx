import React, { useState, useCallback } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    useTheme,
    Avatar,
} from '@mui/material';
import PropTypes from 'prop-types';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import usePods from 'hooks/usePods';
import { v4 as uuid } from 'uuid';
import { postDockerImage, putDockerImage, uploadToS3 } from 'api/cluster';
import useAuth from 'hooks/useAuth';
import { useDropzone } from 'react-dropzone';
import styled from '@emotion/styled';
import { useFileChange } from 'hooks/useFileChange';

const CustomModal = ({ open, handleClose }) => {
    const theme = useTheme();
    const { addWait } = usePods();
    const { user } = useAuth();
    const {
        fileError,
        fileName,
        fileContents,
        fileType,
        fileDispatch,
        handleFileChange,
        filePreview,
    } = useFileChange();
    const onDrop = useCallback((acceptedFiles) => {
        handleFileChange(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.png', '.jpg'],
        },
    });

    return (
        <Dialog open={open} onClose={handleClose}>
            <Formik
                initialValues={{
                    name: '',
                    port: '',
                    url: '',
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Name is required'),
                    url: Yup.string()
                        .max(255)
                        .matches(
                            /[a-z, 0-9]+\/+[a-z, 0-9]+/,
                            'user/image:tag format',
                        )
                        .required('Url is required'),
                    port: Yup.string().max(255).required('Port is required'),
                })}
                onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting },
                ) => {
                    try {
                        let imageFile = null;
                        if (fileType && fileContents) {
                            imageFile = `${user.uid}/${uuid()}`;
                            const filePath = await uploadToS3({
                                fileType,
                                fileContents,
                                objectKey: imageFile,
                            });
                        }

                        const { data } = await postDockerImage({
                            url: values.url,
                            port: values.port,
                            name: values.name,
                            image: imageFile || 'custom.png',
                            fuid: user.uid,
                        });
                        // addWait({
                        //     ...values,
                        //     image: `https://kube-form.s3.ap-northeast-2.amazonaws.com/dockerImages/${
                        //         imageFile || 'custom.png'
                        //     }`,
                        //     id: uuid(),
                        //     draggableId: uuid(),
                        // });
                        handleClose();
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <DialogTitle variant="h4">Custom Image</DialogTitle>
                        <DialogContent>
                            <FormControl
                                fullWidth
                                error={Boolean(touched.name && errors.name)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="outlined-adornment-name-login">
                                    Name
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name-login"
                                    type="text"
                                    value={values.name}
                                    name="name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Name"
                                />
                                {touched.name && errors.name && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text-name-login"
                                    >
                                        {errors.name}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl
                                fullWidth
                                error={Boolean(touched.port && errors.port)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="outlined-adornment-port-login">
                                    Port
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-port-login"
                                    type="text"
                                    value={values.port}
                                    name="port"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="Port"
                                />
                                {touched.port && errors.port && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text-port-login"
                                    >
                                        {errors.port}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl
                                fullWidth
                                error={Boolean(touched.url && errors.url)}
                                sx={{ ...theme.typography.customInput }}
                            >
                                <InputLabel htmlFor="outlined-adornment-url-login">
                                    docker URL
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-url-login"
                                    type="text"
                                    value={values.url}
                                    name="url"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    label="docker URL"
                                />
                                {touched.url && errors.url && (
                                    <FormHelperText
                                        error
                                        id="standard-weight-helper-text-url-login"
                                    >
                                        {errors.url}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl
                                fullWidth
                                sx={{ ...theme.typography.customInput }}
                            >
                                <DropZone
                                    {...getRootProps({ className: 'dropzone' })}
                                >
                                    <Avatar
                                        sx={{ width: 100, height: 100 }}
                                        className="leftPreview"
                                    >
                                        <img
                                            alt="uploadImg"
                                            src={filePreview}
                                            onLoad={() => {
                                                URL.revokeObjectURL(
                                                    filePreview,
                                                );
                                            }}
                                        />
                                    </Avatar>
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p>Drop the files here ...</p>
                                    ) : (
                                        <p>
                                            Drag & drop some files here, click
                                            to select files
                                        </p>
                                    )}
                                </DropZone>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                color="error"
                            >
                                Cancel
                            </Button>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>
        </Dialog>
    );
};

const DropZone = styled.div`
    display: flex;
    text-align: center;
    padding: 1rem;
    border: 3px dashed #eeeeee;
    background-color: #fafafa;
    color: #bdbdbd;
    cursor: pointer;
    align-items: center;

    & .leftPreview {
        margin-right: 3rem;

        & img {
            width: 100px;
            height: 100px;
        }
    }
`;

CustomModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default CustomModal;
