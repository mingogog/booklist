import { Provider } from 'react-redux';
import store from '../redux/store';
import { AppProps } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
// export default MyApp
