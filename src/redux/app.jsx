import React, { useEffect, useState } from "react";
import MapView from "./pages/map-view";
import ListView from "./pages/list-view";
import Header from "./components/header";
import { getFlight } from "./redux/action";
import { useDispatch } from "react-redux";
import SideDetail from "./components/side-bar";

function App() {
  const dispatch = useDispatch();
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  useEffect(() => {
    dispatch(getFlight());
  }, []);

  /*
  haritayı açar ve detayları göstericeğimiz uçağın bilgilerini
  gönderir
  */

  const openDetail = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      {showDetail && (
        <SideDetail setShowDetail={setShowDetail} detailId={detailId} />
      )}

      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünüm
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {showMapView ? (
        <MapView openDetail={openDetail} setShowDetail={setShowDetail} />
      ) : (
        <ListView openDetail={openDetail} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;