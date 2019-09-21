import React from "react";
import Button from "@material-ui/core/Button";
import PhoneEditForm from "./PhoneEditForm";
import Phone from "../requests/phones";




function PhoneDetails(props) {
  const { onDeleteClick = () => { }
    // , onSubmit = () => { } 
  } = props;


  // updateProvider(params) {
  //   Provider.update(this.providerId, params).then(({ id }) => {
  //     this.props.history.push(`/providers/${id}`);
  //   });
  // }

  const updatePhone = params => {
    console.log(1222222222222, props.id);
    Phone.update(props.id, params).then(({ id }) => {
      window.location.reload();
    });
  }

  return (
    <div className="PhoneDetails">
      <PhoneEditForm {...props} onSubmit={updatePhone} />
      <Button
        onClick={() => onDeleteClick(props.id)}
        color="prrimary"
        variant="contained"
      >
        Delete
      </Button>

    </div >
  );
}

export default PhoneDetails;
