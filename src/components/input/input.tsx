import { FC } from "react";
import { TextField } from "../formBuilder/types";

export const Input: FC<TextField> = ({ id, name, placeholder }) => (
  <input id={id} name={name} placeholder={placeholder} type="text" />
);