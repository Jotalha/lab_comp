import logo from './logo.jpeg';
import calca from './img/calca.jpeg';
import bone from './img/bone.png';
import camisa from './img/camisa.jpeg';
import './App.css';
import ReactPaginate from "react-paginate";
import React, {
  useEffect,
  useState
} from "react";
import ReactDOM from "react-dom";

const items = [{
  nome: 'camisa',
  imagem: camisa
  },{
    nome:'calca',
    imagem:calca
  },{
    nome:'bone',
    imagem:bone
  }
    
  ]

function Items({ currentItems }) {
  if (!currentItems) return
  return (
    currentItems.map((items) => (
      <li key={items.nome}>
        <h3>Item {items.nome}</h3>
        <img src={items.imagem} alt="imagem" />
      </li>
    ))
  );
}

function handleButtonClick(){
  alert("Item adicionado ao carrinho!!")
}

function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(items);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    setItemOffset(newOffset);
  };

  
  return (
    
    <div className='pagination'>
      <div className='Table-align'>
      <Items currentItems={currentItems} key={items.nome}/>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
        </div>
    </div>
    
      
  
  
    
  );
}


function App() {
  
  return  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <ul>
        <PaginatedItems itemsPerPage={1} />
      </ul>
      <div>
      <button onClick={handleButtonClick}>Adicionar ao carrinho</button>
        </div>
        <div>
      <a
          className="App-link"
          href="https://www.instagram.com/unicomp.unitri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse nossa página
        </a>
      </div>
    </div>
      
  )
  
}

export default App;
