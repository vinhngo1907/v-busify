import { useTheme, Typography, styled } from "@mui/material";

const Icon = styled('img')`
    width: 40px;
    height: 40px;
    
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }
`;

function BusDetailsCard(){
    const theme = useTheme();
    return (<></>);
}

export default BusDetailsCard;