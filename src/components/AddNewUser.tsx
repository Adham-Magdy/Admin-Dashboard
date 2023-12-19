import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import "../styles/addNewUser.scss"

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const AddNewUser = (props: Props) => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="addUser">
      <div className="modal">
        <span onClick={()=>props.setOpen(false)} className="close">X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="items">
                <label>{column.headerName}</label>
                <input type={column.field} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
