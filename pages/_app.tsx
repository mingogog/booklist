import { Provider } from 'react-redux';
import store from '../redux/store';
import { AppProps } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import "@/styles/globals.css";
import { wrapper } from '@/redux/wrapper';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default App
