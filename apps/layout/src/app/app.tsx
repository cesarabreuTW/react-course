// This was achieved by adding the following to the package.json:
// "exports": {
//   "./styles": "./dist/index.css"
// }
import { ResorceLoaderRender } from '@react-course/design-system';
import '@react-course/design-system/styles';
import axios from 'axios';
import { Books } from './components/books/books';

async function fetchData(url: string) {
  const response = await axios.get('/api/books');
  return response.data;
}

function App() {
  return (
    <ResorceLoaderRender
      getData={() => fetchData('/api/books')}
      render={(books) => <Books books={books} />}
    />
  );
}

export default App;
