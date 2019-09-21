import React from "react";
import PhoneDetails from "./PhoneDetails";
import Button from "@material-ui/core/Button";

function PhoneList(props) {
  const { phones = [], onPhoneDeleteClick = () => { }
    // , onEditSubmitClick = () => { }
  } = props;

  return (
    <div className="PhoneList">
      <ul style={{ listStyle: "none", padding: 0, borderWidth: 0 }}>
        {phones.map(phone => (

          <li key={phone.id}>
            <PhoneDetails {...phone} onDeleteClick={onPhoneDeleteClick}
            // onSubmit={onEditSubmitClick} 
            />
          </li>

        ))}
      </ul>
    </div>
  );
}

export default PhoneList;
