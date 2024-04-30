import { sampleBooks } from '../consts/sampleBooks';
import { wrapper } from "@/redux/wrapper";
import { initBooks } from "@/redux/actions/bookActions";
import { BookList } from "@/components/BookList";

const Home = () => {
  return (
    <div className='relative w-full h-ful'>
      <div className="p-32">
        <BookList/>
      </div>
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(initBooks(sampleBooks));
  return {
    props: sampleBooks,
  };
});

export default Home;

