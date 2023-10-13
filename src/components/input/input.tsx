import Image from "next/image";
import { FC } from "react";
import { Dropdown } from "..";
import { codes } from "../../data";
import { TextField } from "../formBuilder/types";

export const Input: FC<TextField> = ({ id, name, placeholder, type = "text", className }) => (
  <>
    {type === "phone" && <Dropdown className={className} anchor="left" onChange={() => {}} options={codes.map(({ id }) => ({
      id,
      label: <>
      <Image src={`/assets/images/icon-${id}.webp`} alt="" width={28} height={22} />
    </>
    }) )} />}
    <input className={className} id={id} name={name} placeholder={placeholder} type={type} />
  </>
);