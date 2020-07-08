import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <h1>About</h1>
      <p>Stefan is a 25 y/o Informatics student home-based in Munich.</p>
      <p>
        He strives to share what he knows and to learn what he doesn't in order
        to challenge his understandings of topics and technologies he's
        encountered so far. He feels passionate about contributing clean code
        and practicing good and sustainable software development in an
        inclusive, product-oriented team.
      </p>
      <p>
        You can find him in the mountains, working on his Yoga practice,
        consuming and/or re-creating ethic food or reading the occasional book
        (latest:{" "}
        <a href="https://busterbenson.com/whyareweyelling/">
          Why Are We Yelling?
        </a>
        )
      </p>
      <p>July 2020 playlist:</p>
      <iframe
        title="July 2020"
        src="https://open.spotify.com/playlist/0R2RVLVxPU4rQYIWzQV06Q?si=D3aLD4FiRSmpKPK5h2reyQ"
        width="610"
        height="80"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  </Layout>
)
