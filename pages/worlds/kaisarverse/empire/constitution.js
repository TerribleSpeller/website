import React from 'react';
import Head from 'next/head';
import ConstitutionContent from '../../../../components/pages/kaisarverse/empire/constitution';

const content = () => {
    return(
        <>
            <Head>
                <title>Imperial Constitution  - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well | Did you know you have rights? The Constitution says you do. And so do I. I believe that until proven guilty, every man, woman, and child in this country is innocent. And that’s why I fight for you, Manehatten! Better call Saul!"
                />
            </Head>
            <ConstitutionContent />
        </>

    )
}

export default content;