import { Box, styled } from "@mui/material";

export const CenteredBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BetweenBox = styled(CenteredBox)`
    justify-content: space-between;
`