import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div role="status" className="absolute top-0 right-0 bottom-0 left-0 m-auto w-[3em] h-10 md:h-32 z-50 flex items-center justify-center">
        <FontAwesomeIcon icon={faMusic} className="w-10 h-10 animate-spin" style={{ color: '#acaef5' }} />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
