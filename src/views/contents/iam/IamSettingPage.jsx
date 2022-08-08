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
                    {/* Secrets are environment variables that are encrypted. Anyone
                    with collaborator access to this repository can use these
                    secrets for Actions. Secrets are not passed to workflows
                    that are triggered by a pull request from a fork. */}
                    With AWS Identity and Access Management (IAM), you can
                    specify who or what can access services and resources in
                    AWS, centrally manage fine-grained permissions, and analyze
                    access to refine permissions across AWS.
                    {/* AWS IAM(Identity and Access Management)을 사용하면 AWS의
                    서비스 및 리소스에 액세스할 수 있는 사용자 또는 대상을
                    지정하고, 세분화된 사용 권한을 중앙에서 관리하고, 액세스
                    권한을 분석하여 AWS 전체에서 사용 권한을 세분화할 수
                    있습니다. */}
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
