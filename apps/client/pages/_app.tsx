import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles.scss';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Talkbase Interview Assignment</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          emotionOptions={{ key: 'mantine', prepend: false }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
