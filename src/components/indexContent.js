import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
  `);

  console.log(info);

  return (
    <>
      <h2>Título de Página</h2>
    </>
  )
}

export default IndexContent
