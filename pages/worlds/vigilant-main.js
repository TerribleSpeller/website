import React from 'react';
import Head from 'next/head';

import InkbloodsMain from '../../components/content/worlds/inkblood-main.jsx'
import Viggiechart from '../../components/content/worlds/viggie/viggie-chart.jsx'

const content = () => {
    return(
        <>
            <Head>
                <title>Vigilant Main - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well"
                />
            </Head>
            <InkbloodsMain />
            <Viggiechart />
        </>

    )
}

export default content;