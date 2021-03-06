import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="En quelques mots">
        <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
        </ul>
      </Layout>
    )
  }

export const query = graphql`
query{
  allFile(filter: {extension: {eq: "mdx"}}) {
    nodes {
      name
      extension
    }
  }
}`

export default BlogPage