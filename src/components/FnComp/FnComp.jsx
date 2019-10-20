import React from 'react';
function fnComp(props) {
  console.log(props);
  return <div>
    <p>{props.arg}</p>
  </div>
}

export default fnComp;