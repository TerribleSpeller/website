import React from 'react';
import Head from 'next/head';

import Worlds from '../components/pages/Worlds'

const content = () => {
    return(
        <>
            <Head>
                <title>Worlds - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well"
                />
        </Head>
            <Worlds />
        </>

    )
}

export default content;