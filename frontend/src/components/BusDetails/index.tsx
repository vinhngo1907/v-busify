import { Box, Button, Drawer, IconButton, Typography, styled, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from "react-router-dom";


const BusDetails = ({ from, to, disabled, time }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const bookTicketHandler = () => {

    }

    const closeDrawer = () => {

    }

    const Details = styled(Box)`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin: 2rem 0;
        padding: 1.5rem;
    `;

    const PassengersContainer = styled(Box)`
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin: 2rem 0;
        padding: 1rem;
        min-height: 20vh;
    `;
    
    const CrossIcon = styled(CloseIcon)`
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        padding: 2px;
    `;

    return (
        <>
            <Button
                variant="contained"
                disabled={disabled} startIcon={<ConfirmationNumberIcon />}
                onClick={bookTicketHandler}
                sx={{
                    padding: '0.5vw 1.2vw',
                    fontSize: { xs: '10px', sm: '12px', md: '15px' },
                    minWidth: 'max-content',
                    '&:hover': {
                        backgroundColor: '#FBBC05',
                    },
                }}
            >
                Book ticket
            </Button>
            <Drawer>
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
                >
                    <IconButton
                        onClick={closeDrawer}
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                        size="small"
                    >
                        <CrossIcon sx={{ fontSize: { md: '1rem' } }} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography
                        variant="h2"
                        fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
                        color={theme.palette.secondary.main}
                    >
                        Bus Details
                    </Typography>
                    <Details sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                        {/* <BusDetailsCard /> */}
                    </Details>
                </Box>
            </Drawer>
        </>
    )
}

export default BusDetails;