// This was achieved by adding the following to the package.json:
// "exports": {
//   "./styles": "./dist/index.css"
// }
import { Header, ResorceLoaderRender } from '@react-course/design-system';
// @ts-expect-error because we are importing css from a package, we need to ignore the typescript error
import '@react-course/design-system/styles';
import axios from 'axios';
// import { Authors } from './components/authors/authors';
import { Books } from './components/books/books';
import Uncontrolled from './forms/uncontrolled/uncontrolled';

async function fetchData(url: string) {
  const response = await axios.get(url);
  return response.data;
}

//TODO: use the custom hook useResource for fetching data

const fetchBooks = () => fetchData('/api/books');
// const fetchAuthors = () => fetchData('/api/authors');

function App() {
  const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'Books', url: '/books' },
    { title: 'Authors', url: '/authors' },
    { title: 'About', url: '/about' },
  ];

  const actionButtons = [
    { text: 'Sign In', click: () => alert('Sign In clicked') },
    { text: 'Get Started', click: () => alert('Get Started clicked') },
  ];

  return (
    <>
      <Header menu={menuItems} actionButtons={actionButtons} />
      <ResorceLoaderRender
        getData={() => fetchBooks()}
        render={(books) => <Books books={books} />}
      />
      <Uncontrolled onSubmit={(data)=> console.log({data})} />
    </>
  );
}

export default App;
