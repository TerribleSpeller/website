import React from 'react';
import Error from '../components/pages/Error'
import Head from 'next/head';

const NoPageExists = () => {
    return(
        <>  
            <Head>
                <title>404 Error - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - The Website of a Worldbuilder who can't spell well"
                />
            </Head>
            <Error />
        </>
    );
}

export default NoPageExists;