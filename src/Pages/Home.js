import React from 'react'

import Feed from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'
import Stream from '../Components/RowPost/RowPost'
import { action, comedy, doc, horror, originals, romance } from '../Url'
function Home() {
  return (
    <div>
      <Navbar />
      <Feed />

      <Stream url={originals} title="recommended for you" />
      <Stream url={action} title="Action" />
      <Stream url={comedy} title="Comedy" />
      <Stream url={horror} title="Horror" />
      <Stream url={romance} title="Romance" />
      <Stream url={doc} title="Documentaries" />

    </div>
  )
}

export default Home
