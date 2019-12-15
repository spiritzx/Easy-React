import { ADDNAME,ADDAGE } from "./action-type";

export const addNameCreater = (name) =>(
  {
    type: ADDNAME,
    data: name
  }
)
export const addAgeCreater = (age) => (
  {
    type: ADDAGE,
    data: age
  }
)