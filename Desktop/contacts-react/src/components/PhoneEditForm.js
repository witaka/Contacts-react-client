import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function PhoneForm(props) {
  const { onSubmit = () => { } } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit(formData);

    currentTarget.reset();
  };

  return (
    <div className="PhoneForm">
      <form onSubmit={handleSubmit} >
        <textarea
          cols="15"
          rows="1"
          name="number"
          defaultValue={props.number}
        />
        <Button color="prrimary" variant="contained" type="submit">
          Edit
       </Button>

      </form>
    </div>
  );
}

export default PhoneForm;
