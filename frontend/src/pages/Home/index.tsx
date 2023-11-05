import { Box, Grid, Typography, styled } from "@mui/material";
import bgimg from '../../assets/bgimg.png';
import bus from '../../assets/busIcon.svg';
import { useTheme } from "@emotion/react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Grid container direction="column" marginTop="2rem">
            <Grid item>
                <HeroContainer></HeroContainer>
                <Box marginBottom="4rem">
                    <Typography
                        variant="h2"
                        color={theme.palette.secondary.main}
                        fontWeight="700"
                        margin="2rem 0"
                        textAlign="center"
                    >
                        How to Book
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

const HeroContainer = styled(Box)({
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    marginBottom: '4rem',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
});
export default Home;