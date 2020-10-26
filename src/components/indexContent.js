import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image';

const IndexContent = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  // console.log(info.allDatoCmsPagina.nodes[0]);

  const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0]

  return (
    <>
      <h2>{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </div>
    </>
  )
}

export default IndexContent
