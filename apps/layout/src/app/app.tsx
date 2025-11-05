// import { Button, Modal, SplitScreenView } from "@react-course/design-system";
// This was achieved by adding the following to the package.json:
// "exports": {
//   "./styles": "./dist/index.css"
// }
import { ResourceLoader } from '@react-course/design-system';
import '@react-course/design-system/styles';
import { Authors } from './components/authors/authors';
import { Books } from './components/books/books';


function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/api/authors" resourceName="authors">
        <Authors />
      </ResourceLoader>
      <h1>Books</h1>
      <ResourceLoader resourceUrl="/api/books" resourceName="books">
        <Books />
      </ResourceLoader>
    </>
  )
}

export default App
