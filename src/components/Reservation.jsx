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

  // Gestion de la sélection d'agence
  const handleSelectAgency = (e) => {
    const selectedAgency = e.target.value;
    setInputValueAgency(selectedAgency);

    // Filtrer les bus associés à l'agence sélectionnée
    if (buses[selectedAgency]) {
      setFilteredBuses(buses[selectedAgency]);
    } else {
      setFilteredBuses([]);
    }

    // Réinitialiser les valeurs bus et trajet après changement d'agence
    setInputValueBus("");
    setFilteredTrajets([]);
  };

  const handleSelectBus = (e) => {
    const selectedBus = e.target.value;
    setInputValueBus(selectedBus);

    // Filtrer les trajets associés au bus sélectionné
    if (trajets[selectedBus]) {
      setFilteredTrajets(trajets[selectedBus]);
    } else {
      setFilteredTrajets([]);
    }

    // Réinitialiser le trajet après changement de bus
    setInputValueTrajet("");
  };

  return (
    <div className="reservation-container d-flex flex-column flex-md-row justify-content-between align-items-center">
      {/* Sélection d'Agence */}
      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <div className="input-group">
          <span className="input-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </span>
          <select
            className="form-control"
            value={inputValueAgency}
            onChange={handleSelectAgency}
          >
            <option value="">Sélectionnez une agence</option>
            {agencies.map((agency) => (
              <option key={agency} value={agency}>
                {agency}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sélection de Bus */}
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

      {/* Sélection de Trajet */}
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

      {/* Sélection de Date */}
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

      {/* Bouton Rechercher */}
      <div className="reservation-item d-flex align-items-center mb-3 mb-md-0">
        <button className="btn btn-primary d-flex align-items-center">
          <FontAwesomeIcon icon={faSearch} className="me-2" />
          Rechercher
        </button>
      </div>
    </div>
  );
}

export default Reservation;

