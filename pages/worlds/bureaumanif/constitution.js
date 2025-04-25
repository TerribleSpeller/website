import React from 'react';
import Head from 'next/head';

import ConstitutionContent from '../../../components/content/worlds/bureaumanif/constitution.jsx'

const content = () => {
    return(
        <>
            <Head>
                <title>Constitution - TerribleSpeller's Website</title>
                <meta
                 name="description"
                 content="TerribleSpeller's Website - Where Inalineable Rights are very much Alieanble if you read the fine print"
                />
            </Head>
            <ConstitutionContent />
        </>

    )
}

export default content;