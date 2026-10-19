window.onload = function () {
  let pageTitle = document.title;
  let attentionMessage = "Adithya Chandra";

  // Title changes while the tab is in the background; the favicon stays the AC icon.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.title = attentionMessage;
    } else {
      document.title = pageTitle;
    }
  });
};
