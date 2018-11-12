import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import styled from 'styled-components'

import Card from '../components/Card'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'

const PostsWrapper = styled.div`
	padding: 0 15px;
	max-width: 1060px;
	margin: 0 auto 35px;
`

class Blog extends React.Component {
	render() {
		const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location }>
					<div className="Blog">
						<SEO
							title="Blog"
							url={`${siteUrl}/blog`}
						/>
						<Header
							title='Blog'							
							color='#3fabbb'/>		
					</div>
				</Layout>
		)
	}
}

export const queryBlog = graphql`
  	query QueryBlog {
   	site {
      	siteMetadata {
            title
            siteUrl
      	}
    	}
    	allMarkdownRemark(
    		sort: { fields: [frontmatter___date], order: DESC }
    		filter: { frontmatter: { model: { eq: "post"} }}) {
				edges {
					node {
						excerpt(pruneLength: 240)
						timeToRead
						fields {
							thumbnail {
								childImageSharp {
									sizes {
										...GatsbyImageSharpSizes_tracedSVG
								}
							}
						}
					}
					frontmatter {
						date(formatString: "DD MMMM, YYYY")
						title
						path
						thumbnail
						published
					}
				}
    		}
   	}
  }
`

export default Blog
