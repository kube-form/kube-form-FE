import { Typography, Box, List } from '@mui/material';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import IAMListItem from 'ui-component/cards/IAMListItem';

const DUMMYDATA = [
    {
        accessKeyId: '_',
        updated: new Date('1999-02-04T12:00:00Z').toISOString(),
        detail: 'aws',
    },
    {
        accessKeyId: 'AWS_TEST_IAM_',
        updated: new Date('2022-02-28T12:00:00Z').toISOString(),
        detail: 'gcp',
    },
    {
        accessKeyId: 'AWS_TEST_IAM12',
        updated: new Date('2022-06-03T00:00:00Z').toISOString(),
        detail: 'ncp',
    },
    {
        accessKeyId:
            'AWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAMAWS_TEST_IAM',
        updated: new Date('2022-07-03T06:43:00Z').toString(),
        detail: 'aws',
    },
];

function IamSettingPage() {
    return (
        <MainCard title="IAM Setting">
            <Box py={1}>
                <Typography>
                    대충 설명하는 글대충 설명하는 글대충 설명하는 글대충
                    설명하는 글대충 설명하는 글대충 설명하는 글대충 설명하는
                    글대충 설명하는 글대충 설명하는 글대충 설명하는 글
                </Typography>
            </Box>
            <List>
                {DUMMYDATA.map((item) => (
                    <IAMListItem
                        key={item.accessKeyId}
                        accessKeyId={item.accessKeyId}
                        updated={item.updated}
                        detail={item.detail}
                    />
                ))}
            </List>
        </MainCard>
    );
}

export default IamSettingPage;
