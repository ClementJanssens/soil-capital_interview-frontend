import { Box, Typography } from '@mui/material';
import { PhotoI } from '@services/photo.api';
import { usePhotosMutation } from '@services/photos.api';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDashboardStyle from './DashboardSection.style';

const DashboardPhotos = () => {
    const { classes } = useDashboardStyle();
    const { t } = useTranslation();
    const [fetchPhotos] = usePhotosMutation();
    const [photos, setPhotos] = useState<PhotoI[]>([]);

    useEffect(() => {
        fetchPhotos()
            .then((result) => {
                const dataResult = result as { data: PhotoI[] };
                setPhotos(dataResult.data);
            })
            .catch((error: Error) => {
                console.error(error);
            });
    }, [fetchPhotos]);

    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.photos')}
                </Typography>
                <Box className={classes.imgContainer}>
                    {photos.slice(0, 20).map((photo) => (
                        <img key={photo.id} src={photo.thumbnailUrl} />
                    ))}
                </Box>
            </>
        </Box>
    );
};

export default DashboardPhotos;
