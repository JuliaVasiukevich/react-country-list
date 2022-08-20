import React from "react";
import { BadgeLabelType, ColorService } from "../types";

interface IProps {
  value: number;
  type: BadgeLabelType;
  color: ColorService;
}

export const Badge = ({ value, type, color }: IProps) => {
  return (
    <span className={`badge bg-${color} col-2 p-2 mb-0`}>
      {type}: {value}
    </span>
  );
};
