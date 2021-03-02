import escape from "./src/js/escape.js";

const DOMContentLoaded = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Code highlight
    document.querySelectorAll("pre code").forEach((block) => {
      escape.html(block, true);
      hljs.highlightBlock(block);
    });
  });
};

export default DOMContentLoaded;
