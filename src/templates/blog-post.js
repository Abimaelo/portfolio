import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
  <div>
    <h1>{post.frontmatter.title}</h1>
    <div>{ReactHtmlParser(post.html)}</div>
  </div>
	);
};

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;