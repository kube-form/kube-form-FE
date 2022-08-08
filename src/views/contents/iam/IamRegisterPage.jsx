import {
    Typography,
    FormControl,
    OutlinedInput,
    Box,
    Button,
    FormHelperText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { test } from 'utils/kmsUtil';
import useAuth from 'hooks/useAuth';
import { postIAMUser } from 'api/cluster';

function IamRegisterPage() {
    const scriptedRef = useScriptRef();
    const navigate = useNavigate();
    const theme = useTheme();
    const { user } = useAuth();

    return (
        <MainCard title="IAM Register">
            <Formik
                initialValues={{
                    accessKeyId: '',
                    secretAccessKey: '',
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    accessKeyId: Yup.string()
                        .max(255)
                        .required('Access Key Id is required'),
                    secretAccessKey: Yup.string()
                        .max(255)
                        .required('Secret Access Key is required'),
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
                        const res = await postIAMUser({
                            uid: user.uid,
                            accessKeyId: values.accessKeyId,
                            secretAccessKey: values.secretAccessKey,
                        });
                        navigate('/iam/setting');
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
                        >
                            <Box py={1}>
                                <Typography variant="h4">
                                    Access Key Id
                                </Typography>
                            </Box>
                            <OutlinedInput
                                id="outlined-adornment-accessKeyId"
                                type="text"
                                value={values.accessKeyId}
                                name="accessKeyId"
                                onBlur={handleBlur}
                                onChange={handleChange}
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
                                touched.secretAccessKey &&
                                    errors.secretAccessKey,
                            )}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <Box py={1}>
                                <Typography variant="h4">
                                    Secret Access Key
                                </Typography>
                            </Box>
                            <OutlinedInput
                                id="outlined-adornment-secretAccessKey"
                                // type={showPassword ? 'text' : 'password'}
                                type="text"
                                value={values.secretAccessKey}
                                name="secretAccessKey"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                multiline
                                rows={6}
                                // endAdornment={
                                //     <InputAdornment position="end">
                                //         <IconButton
                                //             aria-label="toggle password visibility"
                                //             onClick={handleClickShowPassword}
                                //             onMouseDown={
                                //                 handleMouseDownPassword
                                //             }
                                //             edge="end"
                                //             size="large"
                                //         >
                                //             {showPassword ? (
                                //                 <Visibility />
                                //             ) : (
                                //                 <VisibilityOff />
                                //             )}
                                //         </IconButton>
                                //     </InputAdornment>
                                // }
                                inputProps={{}}
                            />
                            {touched.secretAccessKey && errors.secretAccessKey && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-secretAccessKey"
                                >
                                    {errors.secretAccessKey}
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
