detectTheme();

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  getQueries(tabs[0].url, 1);
});
