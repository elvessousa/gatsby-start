import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About me" />
      <h1>About me</h1>
      <p>Elves Sousa.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
}

export default AboutPage;