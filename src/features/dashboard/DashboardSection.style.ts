import { makeStyles } from 'tss-react/mui';

export default makeStyles()(() => {
    return {
        container: {
            padding: '25px 0px 25px 30px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
        },
        imgContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            width: '100%',
            margin: 'auto',
        },
        subtitle: {
            width: '100%',
            textAlign: 'center',
        },
    };
});
