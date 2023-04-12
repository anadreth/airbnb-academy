import { Typography, styled } from '@mui/material'

type StyledTypographyProps = {
    body: string,
    bold: boolean,
}

const StyledTypography = styled(Typography)<StyledTypographyProps>(({bold}) => ({
    bold: bold ? "bold" : "500",

}))


const Text: React.FC<StyledTypographyProps> = ({body, bold}) => {
  return (
    <StyledTypography bold body={''}>
        {body}
    </StyledTypography>
  )
}

export default Text