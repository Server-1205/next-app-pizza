"use client";

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput = ({ onChange }: Props) => {
  return (
    <AddressSuggestions
      token="c2e1ba0d829fe166813fa5e30b0224af60a3fc06"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
