import { DashboardSection } from '@features/dashboard';
import DashboardPhotos from '@features/dashboard/DashboardPhotos';
import { HomePage, LoginPage } from '@pages';
import { Guard } from '@utils';
import { Navigate, Route, Routes } from 'react-router-dom';

/**
 * Main Router
 */
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Guard target={<HomePage />} guards={['authenticated']} />}>
                <Route index element={<DashboardSection />} />
                <Route path="photos" element={<DashboardPhotos />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default Router;
