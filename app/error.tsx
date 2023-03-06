'use client';

import { useEffect } from 'react';

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    // Log the error to an error reporting service.
    console.error(error);
  }, [error]);

  return <p>Oh no, something went wrong... maybe refresh?</p>;
};

export default Error;
