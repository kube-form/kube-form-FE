import {
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    Box,
    Button,
    InputAdornment,
    FormHelperText,
    IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function IamRegisterPage() {
    const scriptedRef = useScriptRef();
    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <MainCard title="IAM Register">
            {/* <Grid container direction="column" justifyContent="flex-end">
                
            </Grid> */}
            <Formik
                initialValues={{
                    accessKeyId: '',
                    secretAcessKey: '',
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    accessKeyId: Yup.string()
                        .email('Must be a valid email')
                        .max(255)
                        .required('Email is required'),
                    secretAcessKey: Yup.string()
                        .max(255)
                        .required('Password is required'),
                })}
                onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting },
                ) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
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
                        <FormControl
                            fullWidth
                            error={Boolean(
                                touched.accessKeyId && errors.accessKeyId,
                            )}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-accessKeyId">
                                Access Key Id
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-accessKeyId"
                                type="text"
                                value={values.accessKeyId}
                                name="accessKeyId"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Access Key Id"
                                inputProps={{}}
                            />
                            {touched.accessKeyId && errors.accessKeyId && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-accessKeyId"
                                >
                                    {errors.accessKeyId}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(
                                touched.secretAcessKey && errors.secretAcessKey,
                            )}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-secretAcessKey">
                                Secret Access Key
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-secretAcessKey"
                                type={showPassword ? 'text' : 'password'}
                                value={values.secretAcessKey}
                                name="secretAcessKey"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Secret Access Key"
                                inputProps={{}}
                            />
                            {touched.secretAcessKey && errors.secretAcessKey && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-secretAcessKey"
                                >
                                    {errors.secretAcessKey}
                                </FormHelperText>
                            )}
                        </FormControl>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>
                                    {errors.submit}
                                </FormHelperText>
                            </Box>
                        )}
                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Register
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </MainCard>
    );
}

export default IamRegisterPage;
