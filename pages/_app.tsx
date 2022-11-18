import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient()
  return <QueryClientProvider client={client}>
    <Component {...pageProps} />
  </QueryClientProvider>
}
