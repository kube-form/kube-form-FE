import { Typography, Box, List } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import IAMListItem from 'ui-component/cards/IAMListItem';
import { getIAMUser } from 'api/cluster';
import useAuth from 'hooks/useAuth';

const DUMMYDATA = [
    {
        accessKeyId: '_',
        updated: new Date('1999-02-04T12:00:00').toISOString(),
        detail: 'aws',
    },
    {
        accessKeyId: 'AWS_TEST_IAM_',
        updated: new Date('2022-02-28T12:00:00').toISOString(),
        detail: 'gcp',
    },
    {
        accessKeyId: 'AWS_TEST_IAM12',
        updated: new Date('2022-06-03T00:00:00').toISOString(),
        detail: 'ncp',
    },
    {
        accessKeyId:
            'AWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAM',
        updated: new Date('2022-07-03T06:43:00').toISOString(),
        detail: 'aws',
    },
    {
        accessKeyId:
            'AWS_TEST_IAMAWS_TESTa_IAMAWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAM',
        updated: new Date('2022-07-03T14:00:00').toISOString(),
        detail: 'aws',
    },
];

function IamSettingPage() {
    const { user } = useAuth();

    const { data, error } = getIAMUser({ fuid: user.uid });

    const isLoading = !data && !error;

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
                {!isLoading && (
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
