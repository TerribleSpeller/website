import React from 'react';
import Head from 'next/head';

import InkbloodsMain from '../../components/content/worlds/inkblood-main.jsx'

const content = () => {
    return(
        <>
            <Head>
                <title>Inkbloods Main - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well"
                />
            </Head>
            <InkbloodsMain />
        </>

    )
}

export default content;