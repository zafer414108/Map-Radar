import axios from "axios";
import { useEffect, useState } from "react";
import { detailOptions } from "../../helper/constant";

const SideDetail = ({ detailId, setShowDetail }) => {
  const [d, setd] = useState(null);
  useEffect(() => {
    setd(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => setd(res.data));
  }, [detailId]);
  console.log(d);
  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          <span>X</span>
        </p>
        {!d ? (
          <p className="load">Loading</p>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>Kuyruk no: {d.aircraft.registration}</p>

            <img src={d.aircraft?.images?.large[0].src} alt="" />
            <p>Şirket: {d.airline?.name}</p>
            <p>
              kalkış:
              <a href={d.airport.origin?.wepsite}>{d.airport.origin?.name}</a>
            </p>
            <p>
              hedef:
              <a href={d.airport.destination?.wepsite}>
                {d.airport.destination?.name}
              </a>
            </p>
            <p>
              Durum:{" "}
              <span className="status" style={{ background: d.status.icon }}>
                {d.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;