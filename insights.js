// Load and initialize Uniqode Insights SDK
(function() {
    var script = document.createElement('script');
    script.src = 'https://q.cdn.uniqode.com/insights/staging/v1/latest/sdk.js';
    script.onload = function() {
      window.insights.init({
        clientKey: 'cl_a20be94d-0f36-4895-ae67-73c71d622762'
      });
    };
    document.head.appendChild(script);
  })();
