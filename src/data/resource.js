export default [
    {
        id: 'WorkLoads',
        contents: [
            'PodTemplate',
            'Pods',
            'ReplicaSets',
            'Deployments',
            'StatefulSets',
            'DaemonSets',
            'Jobs',
            'CronJobs',
            'PriorityClasses',
            'HorizontalPodAutoscalers',
        ],
    },
    {
        id: 'Cluster',
        contents: [
            'Nodes',
            'Namespaces',
            'APIServices',
            'Leases',
            'RuntimeClasses',
            'FlowSchemas',
            'PriorityLevelConfigurations',
        ],
    },
    {
        id: 'ServiceAndNetworking',
        contents: [
            'Services',
            'EndPoints',
            'EndpointSlices',
            'Receive',
            'IngressClasses',
        ],
    },
    {
        id: 'Config and Storage',
        contents: [
            'ConfigMap',
            'Secrets',
            'PersistentVolumeClaims',
            'PersistentVolumes',
            'StorageClasses',
            'VolumeAttachment',
            'CSIDrivers',
            'CSINodes',
        ],
    },
    { id: 'Authentication', contents: ['ServiceAccounts'] },
    {
        id: 'Authorization',
        contents: [
            'ClusterRoles',
            'ClusterRoleBindings',
            'Roles',
            'RoleBindings',
        ],
    },
    {
        id: 'Policy',
        contents: [
            'ResourceQuotas',
            'NetworkPolicies',
            'PodDisruptionBudgets',
            'PodSecurityPolicies',
        ],
    },
    {
        id: 'Extensions',
        contents: [
            'CustomResourceDefinitions',
            'MutatingWebhookConfigurations',
            'ValidatingWebhookConfigurations',
        ],
    },
];
