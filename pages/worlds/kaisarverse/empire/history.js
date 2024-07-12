import React from 'react';
import Head from 'next/head';
import HistoryMainContent from '../../../../components/pages/kaisarverse/empire/foreignrelations';

const content = () => {
    return(
        <>
            <Head>
                <title>History  - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well | 3000 Years of History and YET NO USE FOUND FOR IT"
                />
            </Head>
            <HistoryMainContent />
        </>

    )
}

export default content;