import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './compo/Nabvar/Navbar';
import ItemListContainer from './compo/ItemListCont/ItemListCont';
import ItemDetailCont  from "./compo/ItemDetailCont/ItemDetailtCont";

function App() {
return (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:itemId" element={ <ItemDetailCont />} />
      <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App
