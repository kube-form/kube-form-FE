import { Typography, Box, List } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import IAMListItem from 'ui-component/cards/IAMListItem';
import { getIAMUser } from 'api/cluster';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function IamSettingPage() {
    const { user } = useAuth();

    const { data, error } = getIAMUser({ fuid: user.uid });

    // const isLoading = !data && error;

    return (
        <MainCard title="IAM Setting">
            <Box py={2}>
                <Typography>
                    Secrets are environment variables that are encrypted. Anyone
                    with collaborator access to this repository can use these
                    secrets for Actions. Secrets are not passed to workflows
                    that are triggered by a pull request from a fork.
                </Typography>
            </Box>
            <List>
                {data?.accessKey && (
                    <IAMListItem
                        key={data.accessKey}
                        fuid={user.uid}
                        accessKeyId={data.accessKey}
                        updated={Date.now()}
                        detail="AWS"
                    />
                )}
            </List>
        </MainCard>
    );
}

export default IamSettingPage;
