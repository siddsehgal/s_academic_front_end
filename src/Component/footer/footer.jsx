import React from 'react';
import style from './footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div
            className={style.footer}
            style={{
                backgroundColor: '#0b2149',
                padding: '1.5% 2%',
                position: 'fixed',
                bottom: '0px',
                width: '100%',
                zIndex: '10',
            }}
        >
            <p style={{ color: 'white', margin: '0', marginBottom: '1%' }}>
                All 2022 © Copyrights Reserve to WhiteSmokeEngineers
            </p>
            <div
                style={{
                    backgroundColor: 'white',
                    height: '1px',
                    width: '100%',
                }}
            ></div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    margin: '1% 0',
                }}
            >
                <a href="https://www.facebook.com" target={'_blank'}>
                    <FacebookIcon
                        style={{ margin: '0 5px' }}
                        // sx={{ color: '#4267B2' }}
                        sx={{ color: 'white' }}
                    ></FacebookIcon>
                </a>
                <a href="https://www.youtube.com" target={'_blank'}>
                    <YouTubeIcon
                        style={{ margin: '0 5px' }}
                        // sx={{ color: '#FF0000' }}
                        sx={{ color: 'white' }}
                    ></YouTubeIcon>
                </a>
                <a href="https://www.instagram.com" target={'_blank'}>
                    <InstagramIcon
                        style={{ margin: '0 5px' }}
                        // sx={{ color: '#4267B2' }}
                        sx={{ color: 'white' }}
                    ></InstagramIcon>
                </a>
            </div>
        </div>
    );
};

export default footer;
