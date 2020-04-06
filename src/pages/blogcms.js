import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import blogCmsStyles from './blogcms.module.scss';
import Head from '../components/head';


const BlogCMS = () => {
  const data = useStaticQuery(graphql `
    query {
      allContentfulBlogPost(sort: {
        fields: publishedDate,
        order: DESC
      }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Head title="Articles from CMS" />
      <h1>Blog from CMS (Contentful)</h1>
      <ol className={blogCmsStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogCmsStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>
                  {edge.node.title}
                </h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
}

export default BlogCMS;
