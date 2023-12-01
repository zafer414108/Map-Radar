import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ openDetail }) => {
  const store = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerpage = 10;
  // sayfalama değeri
  const endOffset = itemOffset + itemsPerpage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(store?.flights.length / itemsPerpage);

  //sayfalara tıklanınca çalışır
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerpage) % store?.flights.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly) => (
              <tr>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lan}</td>
                <td>
                  <button onClick={() => openDetail(fly.id)}>Detay</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Geri"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default ListView;