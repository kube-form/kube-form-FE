import React from 'react';
// material-ui
import {
    Card,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Skeleton,
} from '@mui/material';
import styled from '@emotion/styled';

// ==============================|| SKELETON - TOTAL INCOME DARK/LIGHT CARD ||============================== //

function TotalIncomeCard() {
    return (
        <Warpper sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
                <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                    <ListItemAvatar>
                        <Skeleton
                            variant="rectangular"
                            width={44}
                            height={44}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ py: 0 }}
                        primary={<Skeleton variant="rectangular" height={20} />}
                        secondary={<Skeleton variant="text" />}
                    />
                </ListItem>
            </List>
        </Warpper>
    );
}

const Warpper = styled(Card)`
    filter: blur(2px);
`;

export default TotalIncomeCard;
