import React from 'react';
import Link from 'gatsby-link';
import FadeIn from '../utils/fade-in';
import styles from './words.module.css';

export default ({ data }) => (
  <div>
    <FadeIn
      x={{
				start: 40,
				end: 0,
				stiffness: 70,
				damping: 20,
			}}
    >
      <h1>Words</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
				const reg = new RegExp('^/words/*');
				// console.log(`slug: ${node.fields.slug}`);
				// console.log(`test: ${reg.test(node.fields.slug)}`);
				if (reg.test(node.fields.slug)) {
					return (
  <div key={node.id} className={styles.link}>
    <Link to={node.fields.slug}>
      <p className={styles.date}>{node.frontmatter.date}</p>
      <h3
        style={{
										display: 'inline',
										textDecoration: 'none',
									}}
      >
        {node.frontmatter.title}
      </h3>
      <p className={styles.excerpt}>{node.excerpt}</p>
      {/* <p>{node.excerpt}</p> */}
    </Link>
  </div>
					);
				}
				return '';
			})}
    </FadeIn>
  </div>
);

export const query = graphql`
	query BlogQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt(pruneLength: 50)
				}
			}
		}
	}
`;
