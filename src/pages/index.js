import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Elves, an awesome designer living in São Paulo.</h2>
        <p>Need a designer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
    );
}

export default IndexPage;
