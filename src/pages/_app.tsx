// used for rendering equations (optional)
import "katex/dist/katex.min.css"
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"
// used for rendering equations (optional)
import "katex/dist/katex.min.css"

import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"

import {
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query"

import { AppPropsWithLayout } from "../types"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
