import React, { useState } from "react";
import { Box, Button, Drawer, IconButton, Typography, styled, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import FareBreakDownCard from '../FareBreakdownCard';
import { BusDetailsType } from "../../types";

const BusDetails = ({ from, to, disabled, time }: BusDetailsType) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isAddingPassenger, setIsAddingPassenger] = useState(false)
    const [isToasterActive, setIsToasterActive] = useState(false)

    const bookTicketHandler = () => {

    }

    const drawerstyle = {
        width: { xs: '100%', sm: '66.6667%' },
        padding: '2rem',
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    const handleAddPassenger = (event: React.FormEvent) => {
        event.preventDefault();
        const input = event.target as HTMLInputElement;

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
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
                            variant="h2"
                            color={theme.palette.secondary.main}
                        >
                            Passenger Details
                        </Typography>
                        {/* {!isAddingPassenger} */}
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h2"
                        fontSize={{ xs: '1.5rem', sm: '1.75rem', md: '2rem' }}
                        color={theme.palette.secondary.main}
                    >
                        Fare Breakdown
                    </Typography>
                    <FareBreakDownCard />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginTop: '2rem',
                    }}
                >
                    <Button
                        variant="contained"

                        sx={{
                            padding: '0.5rem 2rem',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    >
                        Pay Now
                    </Button>
                    <Toaster />
                </Box>
            </Drawer>
        </>
    )
}

export default BusDetails;