// This was achieved by adding the following to the package.json:
// "exports": {
//   "./styles": "./dist/index.css"
// }
import { Header, ResorceLoaderRender } from '@react-course/design-system';
import '@react-course/design-system/styles';
import axios from 'axios';
import { Books } from './components/books/books';

async function fetchData(url: string) {
  const response = await axios.get(url);
  return response.data;
}

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
        getData={() => fetchData('/api/books')}
        render={(books) => <Books books={books} />}
      />
    </>
  );
}

export default App;
