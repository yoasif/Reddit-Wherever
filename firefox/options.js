chrome.storage.sync.get('theme', ({ theme }) => {
  document.getElementById('theme').value = theme || 'default';
});

chrome.storage.sync.get('clickOnly', ({ clickOnly }) => {
  document.getElementById('clickOnly').checked = clickOnly;
});

chrome.storage.sync.get('ytDefault', ({ ytDefault }) => {
  document.getElementById('ytDefault').checked = ytDefault;
});

window.onchange = function change(event) {
  if (event.target.matches('#theme')) {
    chrome.storage.sync.get('theme', ({ theme }) => {
      const { value } = document.getElementById('theme');
      chrome.storage.sync.set({ theme: value });
    });
  } else if (event.target.matches('#clickOnly')) {
    chrome.storage.sync.get('clickOnly', ({ clickOnly }) => {
      const value = !clickOnly;
      chrome.storage.sync.set({ clickOnly: value });
      if (value === true) {
        chrome.browserAction.setIcon({
          path: {
            16: '../images/reddit_16.png',
          },
        });
      }
    });
  } else if (event.target.matches('#ytDefault')) {
    chrome.storage.sync.get('ytDefault', ({ ytDefault }) => {
      const value = !ytDefault;
      chrome.storage.sync.set({ ytDefault: value });
    });
  }
};
