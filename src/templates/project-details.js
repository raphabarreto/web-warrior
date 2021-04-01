import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { details, html, featured } from '../styles/project-details.module.css';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;

  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt={`Project - ${title}`}
          />
          <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
