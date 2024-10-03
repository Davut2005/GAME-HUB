import { FieldValues, useForm } from "react-hook-form";
import "./NavBar.css";
import { useState } from "react";
import { GameListMode } from "./GameList";

interface Submit {
  Submitting: (data: FieldValues) => void;
  changingMode: () => void;
  mode: boolean;
  changeOnlyGame: () => void;
}

const NavBar = ({ Submitting, changingMode, mode, changeOnlyGame }: Submit) => {
  let { register, handleSubmit } = useForm();
  const changeMode = () => changingMode();
  let modeClass: string;
  if (mode) {
    modeClass = "rounded-4 navInput navColorGrey";
  } else {
    modeClass = "rounded-4 navInput navColorWhite";
  }

  return (
    <div className="width d-flex flex-row mb-3">
      <button onClick={changeOnlyGame}>
        <h1 className="place">RAWG</h1>
      </button>
      <div className="mb-3 rounded-4 width placeTop">
        <form
          className="rounded-4"
          onSubmit={handleSubmit((data) => {
            Submitting(data);
          })}
        >
          <input className={modeClass} id="name" {...register("name")} />
        </form>
      </div>
      <div className=" place form-check form-switch">
        <form>
          <input
            onChange={() => changeMode()}
            className="form-check-input"
            type="checkbox"
            role="switch"
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
