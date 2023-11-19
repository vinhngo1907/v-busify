import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

type UserProtectedRoutetypes = {
    children: React.ReactNode;
};