import { CHANGENAME, CHANGESEX } from "./actionType";

export const changeName = (name) =>(
  {
    type: CHANGENAME,
    data: name
  }
)
export const changeSex = (sex) => (
  {
    type: CHANGESEX,
    data: sex
  }
)