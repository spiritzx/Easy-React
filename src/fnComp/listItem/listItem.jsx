import React from 'react'
import { Link } from 'react-router-dom'

function listItem(text, key) {
  return (
    <Link key={ key }  to="/">
      { text }
    </Link>
  );
};
export default listItem;
