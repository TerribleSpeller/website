import React from 'react';
import Head from 'next/head';
import DemographicsContent from '../../../../components/pages/kaisarverse/empire/demographics';

const content = () => {
    return(
        <>
            <Head>
                <title>Imperial Demographics - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well \n Did you know 60% of all Bureaucrats have a mistress?"
                />
            </Head>
            <DemographicsContent />
        </>

    )
}

export default content;