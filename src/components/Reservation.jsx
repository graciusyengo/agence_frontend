import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faMapMarkerAlt,
  faBuilding,
  faCalendarAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Importer les données depuis le fichier séparé
import { agencies, buses, trajets } from "./data";

function Reservation() {
  const [inputValueAgency, setInputValueAgency] = useState("");
  const [inputValueBus, setInputValueBus] = useState("");
  const [inputValueTrajet, setInputValueTrajet] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [suggestionsAgency, setSuggestionsAgency] = useState([]);
  const [filteredBuses, setFilteredBuses] = useState([]);
  const [filteredTrajets, setFilteredTrajets] = useState([]);

  const handleChangeAgency = (e) => {
    const value = e.target.value;
    setInputValueAgency(value);

    if (value.length > 0) {
      const filterAgency = agencies.filter((agency) =>
        agency.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestionsAgency(filterAgency);
    } else {
      setSuggestionsAgency([]);
    }
    // Reset bus and trajet when agency changes
    setInputValueBus("");
    setFilteredBuses([]);
    setInputValueTrajet("");
    setFilteredTrajets([]);
  };

  const handleSelectAgency = (selectedAgency) => {
    setInputValueAgency(selectedAgency);
    setSuggestionsAgency([]);
    if (buses[selectedAgency]) {
      setFilteredBuses(buses[selectedAgency]);
    } else {
      setFilteredBuses([]);
    }
    setInputValueBus("");
    setInputValueTrajet("");
    setFilteredTrajets([]);
  };

  const handleSelectBus = (e) => {
    const selectedBus = e.target.value;
    setInputValueBus(selectedBus);
    if (trajets[selectedBus]) {
      setFilteredTrajets(trajets[selectedBus]);
    } else {
      setFilteredTrajets([]);
    }
    setInputValueTrajet("");
  };

  return (
    <div className="reservation-container d-flex flex-column flex-md-row justify-content-between align-items-center ">
      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Entrez le nom de l'agence"
            value={inputValueAgency}
            onChange={handleChangeAgency}
          />
          {suggestionsAgency.length > 0 && (
            <ul className="suggestions-list">
              {suggestionsAgency.map((suggestionAgency) => (
                <li
                  key={suggestionAgency}
                  onClick={() => handleSelectAgency(suggestionAgency)}
                >
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  {suggestionAgency}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-icon">
            <FontAwesomeIcon icon={faBus} />
          </span>
          <select
            className="form-control"
            value={inputValueBus}
            onChange={handleSelectBus}
            disabled={!filteredBuses.length}
          >
            <option value="">Sélectionnez un bus</option>
            {filteredBuses.map((bus) => (
              <option key={bus} value={bus}>
                {bus}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <select
            className="form-control"
            value={inputValueTrajet}
            onChange={(e) => setInputValueTrajet(e.target.value)}
            disabled={!filteredTrajets.length}
          >
            <option value="">Sélectionnez un trajet</option>
            {filteredTrajets.map((trajet) => (
              <option key={trajet} value={trajet}>
                {trajet}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-icon">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="form-control date"
            placeholderText="Sélectionnez une date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <button className="btn btn-primary d-flex align-items-center">
          <FontAwesomeIcon icon={faSearch} className="me-2" />
          Rechercher
        </button>
      </div>

      {/* ... Autres parties de votre code */}
    </div>
  );
}

export default Reservation;

