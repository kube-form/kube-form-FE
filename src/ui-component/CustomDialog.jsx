import React, { useState } from 'react';
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
} from '@mui/material';
import PropTypes from 'prop-types';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import usePods from 'hooks/usePods';
import { v4 as uuid } from 'uuid';
import { postDockerImage, putDockerImage } from 'api/cluster';
import useAuth from 'hooks/useAuth';
import { useDropzone } from 'react-dropzone';

const CustomModal = ({ open, handleClose }) => {
    const theme = useTheme();
    const { addWait } = usePods();
    const { user } = useAuth();

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
                            /[a-z, 0-9]+\/+[a-z, 0-9]+:[a-z, 0-9]+/,
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
                        const { data } = await postDockerImage({
                            url: values.url,
                            port: values.port,
                            name: values.name,
                            image: values.name,
                        });
                        addWait({
                            ...values,
                            image: `https://kube-form.s3.ap-northeast-2.amazonaws.com/dockerImages/custom.png`,
                            id: uuid(),
                        });
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

CustomModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default CustomModal;
