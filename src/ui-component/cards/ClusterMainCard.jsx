import React, { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography,
} from '@mui/material';

const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 },
};

const ClusterMainCard = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        },
        ref,
    ) => {
        const theme = useTheme();
        return (
            <Card
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: theme.palette.primary[200] + 75,
                    ':hover': {
                        boxShadow: boxShadow
                            ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)'
                            : 'inherit',
                    },
                    ...sx,
                    backgroundColor: `${theme.palette.primary.light}`,
                }}
            >
                {/* card header and action */}
                {!darkTitle && title && (
                    <CardHeader
                        sx={headerSX}
                        title={title}
                        action={secondary}
                    />
                )}
                {darkTitle && title && (
                    <CardHeader
                        sx={headerSX}
                        title={<Typography variant="h3">{title}</Typography>}
                        action={secondary}
                    />
                )}

                {/* content & header divider */}
                {title && <Divider />}

                {/* card content */}
                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    },
);

export default ClusterMainCard;
