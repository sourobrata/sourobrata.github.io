// Load and initialize Uniqode Insights SDK
(function() {
    var script = document.createElement('script');
    script.src = 'https://q.cdn.uniqode.com/insights/staging/v1/latest/sdk.js';
    script.onload = function() {
      window.insights.init({
        clientKey: 'cl_25c16dfd-f89f-45f3-b900-06e3d8e3ab9c'
      });
    };
    document.head.appendChild(script);
  })();