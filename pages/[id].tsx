import React from 'react'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true or false // See the "fallback" section below
  };
}

export async function getStaticProps() {
  const document = await Client.getSingle("landing", {})
  return {
    props: {document},
  }
}

export default function Article() {
  return (
    <div>
      
    </div>
  )
}
