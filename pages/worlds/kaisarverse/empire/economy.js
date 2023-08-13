import React from 'react';
import Head from 'next/head';
import EconomyContent from '../../../../components/pages/kaisarverse/empire/economy';

const content = () => {
    return(
        <>
            <Head>
                <title>Imperial Economy - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well"
                />
            </Head>
            <EconomyContent />
        </>

    )
}

export default content;