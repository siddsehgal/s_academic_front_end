// import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import Header from '../../Component/header/header';
import Footer from '../../Component/footer/footer';
import Note from './note';
import Video from './video';
import Assignment from './assignment';
import BG_IMG_PC from '../../img/pngegg3.png';
import BG_IMG_MOBILE from '../../img/pngegg4.png';

const Topic = () => {
    const [dimensions, setDimensions] = useState({ width: '', height: '' });
    const { height, width } = dimensions;
    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${
                        width > 650 ? BG_IMG_PC : BG_IMG_MOBILE
                    })`,
                    top: '60px',
                    position: 'fixed',
                    bottom: '100px',
                    right: '0',
                    left: '0',
                    width: '100vw',
                    height: '90vh',
                    backgroundSize: '100vw 90vh',
                    // border: '1px solid black',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                }}
            ></div>
            <Header />
            <Assignment />

            <hr />
            <Video />

            <hr />
            <Note />

            <Footer />
        </div>
    );
};

export default Topic;
