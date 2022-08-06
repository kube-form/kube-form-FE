import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import NetworkPanel from 'ui-component/bottomTabPannel/NetworkPanel';
import SummaryPanel from 'ui-component/bottomTabPannel/SummaryPanel';
import LoggingPannel from 'ui-component/bottomTabPannel/LoggingPanel';
import { tabAllyProps } from 'utils/util';
import UpdateLogPanel from 'ui-component/bottomTabPannel/UpdateLogPanel';
import ResourcePanel from 'ui-component/bottomTabPannel/ResourcePanel';
import { getClusterStatus } from 'api/cluster';
import PropTypes from 'prop-types';

const TABSDATA = [
    'Overview',
    'Network',
    'Loging',
    'Update history',
    'Resources',
];

const Dummy = {
    detail: 'terraform apply command executed successfully.',
    data: {
        entry_points: [
            'a61f72b58d91449cdb267b89e40412f6-4caeff790e30fff0.elb.ap-northeast-2.amazonaws.com',
            'a9abe5353f5e748ffa21edd5d6dfea16-8a172504f5646788.elb.ap-northeast-2.amazonaws.com',
        ],
        cluster_data: {
            cluster_arn: {
                sensitive: false,
                type: 'string',
                value: 'arn:aws:eks:ap-northeast-2:170777615631:cluster/kubeform-cluster',
            },
            cluster_certificate_authority_data: {
                sensitive: false,
                type: [
                    'list',
                    [
                        'object',
                        {
                            data: 'string',
                        },
                    ],
                ],
                value: [
                    {
                        data: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMvakNDQWVhZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJeU1EZ3dNVEEwTWpBMU5Gb1hEVE15TURjeU9UQTBNakExTkZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTlJqCnB0STRTbit1VzBkb0tBUy9ZdjJEeHVNZHV0Misvci91NHBQT0tlOS9QaUJlSXYvYzd3U09NcnJtbWdEYTkrRUEKSzRyRUJEKzVBYjF5TnhiSk5GalA2R3dacHNyTExvRWZYQ0lqb29uS3RIbUlYT1Z1bmNTdWVYZWMxazlUSkNxRgpvUElIM0hSa3N3NHVwYm1NeTFQT3NqaXZJTHBvU3luUEIyQ0FOTVZVOHlQY2V5RGRDWlRDOFAvRmU1ZFJZMTZHCmJEWkQ5cE1Nd21zYzgwMFdpVDBOdkRONU11VGZmS3hZTTBwVG1VV0J0dk8vNlpGSVR5aExaRys3U09LMEw4aEYKTURoeFY1ZjNMb1lUN1VRdzd1OFovOUJGZGZCd3VzcHZYR3FPYm96S2U3THZKN1YxdDJGZ3doYWpoMFQ2bzd4bQpoSW5HcUNZTStvNVFwclQxd2lNQ0F3RUFBYU5aTUZjd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZLMnVtRUFXbjlHSi9Jbklnb0Q4bUZFaHFFZGRNQlVHQTFVZEVRUU8KTUF5Q0NtdDFZbVZ5Ym1WMFpYTXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBTVhGd25YZ0ZhWnprVWQwaE5qUgpJSUgyVWE5QWFMVDdJNzh6SmdmSXRwbXNqL2VDdk55ZzVUMmplNU9sSGhJeEtUcjdFTHQwSDZmRHEzR2dHZ0gyCnpuUktRRWprZitXdGdKcVY0MjRtY2tNbnAzWTEwNzlBT3NUM2hRSFF0ekFUaWwrSlcxeVVsSkd5Yi9BLy9ta0kKOStWcjR0VkVXSG90dHFDdmVrNWdLWFZOUnVvd1U5cXFmUmFsMXN2UjVBZmFaSWR2RGZpSHBYQzVJRVdCNFpzbApJQjdDbnhxOWxKUytRSHpYM3FiaFhSWm5yeW9LaDVNN0xDZWd2NGhBME9OYUZRUFl5ZGFYMDRlMmZ0MUR0ZEhHCmFuUkJzNzBDNEhnTUZlNDdyU1h6U1lKejMvKzRqZXJCTXV1Ri9RcjRGb2daZjBTWkwyejB4VFhwZjFWZnNGTEoKbWpFPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==',
                    },
                ],
            },
            cluster_endpoint: {
                sensitive: false,
                type: 'string',
                value: 'https://543B7594A363FE40EA7D064AB3846376.yl4.ap-northeast-2.eks.amazonaws.com',
            },
            cluster_name: {
                sensitive: false,
                type: 'string',
                value: 'kubeform-cluster',
            },
            cluster_oidc_issuer_url: {
                sensitive: false,
                type: [
                    'list',
                    [
                        'object',
                        {
                            oidc: [
                                'list',
                                [
                                    'object',
                                    {
                                        issuer: 'string',
                                    },
                                ],
                            ],
                        },
                    ],
                ],
                value: [
                    {
                        oidc: [
                            {
                                issuer: 'https://oidc.eks.ap-northeast-2.amazonaws.com/id/543B7594A363FE40EA7D064AB3846376',
                            },
                        ],
                    },
                ],
            },
            cluster_platform_version: {
                sensitive: false,
                type: 'string',
                value: 'eks.5',
            },
            cluster_primary_security_group_id: {
                sensitive: false,
                type: 'string',
                value: 'sg-064026a5bb3319158',
            },
            cluster_version: {
                sensitive: false,
                type: 'string',
                value: '1.22',
            },
            common_tags: {
                sensitive: false,
                type: [
                    'object',
                    {
                        Environment: 'string',
                        Project: 'string',
                    },
                ],
                value: {
                    Environment: 'dev',
                    Project: 'hands-on.cloud',
                },
            },
            prefix: {
                sensitive: false,
                type: 'string',
                value: 'kubeform',
            },
            private_subnets: {
                sensitive: false,
                type: ['tuple', ['string', 'string']],
                value: ['subnet-0846edca6892d83bd', 'subnet-0644b9e9bb65c0085'],
            },
            public_subnets: {
                sensitive: false,
                type: ['tuple', ['string', 'string']],
                value: ['subnet-0bbc907d965352b0e', 'subnet-03bda6d168630b93d'],
            },
            vpc_id: {
                sensitive: false,
                type: 'string',
                value: 'vpc-0120df17f053c06a4',
            },
        },
    },
};

const DummyDetail = Dummy.detail;
const DummyData = Dummy.data;

const Simple = {
    cluster: Dummy.data.cluster_data,
};
const Test = {
    cluster_data: DummyData.cluster_data,
};

const EntryPoints = DummyData.entry_points;
const ClusterData = DummyData.cluster_data;
const Arn = ClusterData.cluster_arn;

// getClusterStatus();
console.log('DummyData: ', DummyData);
console.log('Simple:', Simple);
console.log(DummyData.detail);

function StatusBottomContainer() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <MainCard content={false} sx={{ marginY: 4 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="status_tabs"
                    >
                        {TABSDATA.map((item, index) => (
                            <Tab
                                key={item}
                                label={item}
                                {...tabAllyProps(index)}
                                disabled={index > 5}
                            />
                        ))}
                    </Tabs>
                </Box>

                <SummaryPanel
                    value={value}
                    index={0}
                    clusterData={ClusterData}
                />
                <NetworkPanel
                    value={value}
                    index={1}
                    clusterData={ClusterData}
                />
                <LoggingPannel value={value} index={2} />
                <UpdateLogPanel value={value} index={3} />
                <ResourcePanel value={value} index={4} />
            </MainCard>
        </>
    );
}

export default StatusBottomContainer;
