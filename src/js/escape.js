var escape = {
  /**
   * escape.html();
   * @param {object | string} target
   * @param {boolean} replace
   */
  html: (target, replace) => {
    const entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    };

    const strEscaped = (str) => {
      return String(str).replace(/[&<>"'`=\/]/g, (s) => {
        return entityMap[s];
      });
    };

    switch (true) {
      case typeof target === "string":
        return strEscaped(target);
        break;
      case typeof target === "object":
        const oldValue = target.innerHTML;
        if (replace === true) {
          target.innerHTML = strEscaped(oldValue);
        } else {
          return strEscaped(oldValue);
        }
        break;
      default:
        console.error(target, "is not ok");
        break;
    }
  },
};

export default escape;
