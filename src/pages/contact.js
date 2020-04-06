import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return ( 
    <Layout>
      <Head title="Contact" />
      <h1>Contact page</h1>
      <p>
        Contact me via github: 
        <a 
          href="https://github.com/elvessousa" 
          target="_blank"
          rel="noopener noreferrer"
        >
          @elvessousa
        </a>.
      </p>
    </Layout>
  );
}

export default ContactPage;