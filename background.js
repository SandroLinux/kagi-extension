
    browser.runtime.onInstalled.addListener(details => {
      if (details.reason == "install") {
          setTimeout(() => {
              browser.tabs.create({
                  url: "https://kagi.com/"
              });
          }, 3000);
      }
  });