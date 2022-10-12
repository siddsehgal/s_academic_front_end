// import { View, Text } from 'react-native'
import React from 'react';
import Header from '../../Component/header/header';
import Footer from '../../Component/footer/footer';
import Note from './note';
import Video from './video';
import Assignment from './assignment';

const Topic = () => {
    return (
        <div>
            <Header />

            <Note />
            <hr />
            <Video />
            <hr />
            <Assignment />
            <Footer />
        </div>
    );
};

export default Topic;
