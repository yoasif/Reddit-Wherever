import * as React from 'react';

const toggleReddit = () => {
  document.getElementById('comments')!.style.display = 'none';
  document.getElementById('redditImgWrap')!.style.display = 'none';
  document.getElementById('redComments')!.style.display = 'block';
};

const ToggleReddit = () => (
  <button type="submit" className="toggleButton" onClick={toggleReddit}>
    <img
      id="redditImg"
      className="toggleImg"
      alt="Youtube toggle icon"
      src={chrome.runtime.getURL('../images/grey_32.png')}
    />
  </button>
);

export default ToggleReddit;
