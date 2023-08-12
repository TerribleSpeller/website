import React from 'react';
import KaisarverseMain from '../../components/pages/kaisarverse-main';
import Head from 'next/head';


const KaisarverseContent = () => {
    return(
        <>
            <Head>
                <title>Kasiarverse - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well"
                />
            </Head>
            <KaisarverseMain />
        </>

    );
}

export default KaisarverseContent;