import MetaConfig from "src/components/MetaConfig"
import About from "src/routes/About"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "../types"

type Props = {}

const AboutPage: NextPageWithLayout<Props> = () => {
  return <About />
}

AboutPage.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          description: CONFIG.blog.description,
          type: "website",
          url: CONFIG.link,
        }}
      />
      {page}
    </>
  )
}

export default AboutPage
