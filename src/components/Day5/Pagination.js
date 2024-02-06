import React,{useState, useEffect} from 'react'


function Pagination() {
    const totalItems = 100;
    const itemsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if(currentPage < 1){
            setCurrentPage(1);
        } else if(currentPage > totalPages){
            setCurrentPage(totalPages);
        }

        const startIndex = (currentPage -1) * itemsPerPage;
        const endIndex = startIndec + itemsPerPage;
        const pageItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`).slice(startIndex, endIndex);
    
        setCurrentItems(pageItems);

    }, [currentPage]);

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };


  return (
    <div>
      <h1>Day 5 Pagination!</h1>
      <ul>
        {currentItems.map((item, index)=>{
            <li key={index}>{item}</li>
        })}
      </ul>
      <div>
        <button className="button-funny" onClick={handlePreviousPage} disabled={currentPage===1}>Previous</button>
        <button className="button-funny" onClick={handleNextPage} disabled={ currentPage===Math.ceil(totalItems / itemsPerPage)}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
