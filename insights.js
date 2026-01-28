// Load and initialize Uniqode Insights SDK
(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.uniqode.com/insights/production/v1/latest/sdk.js';
    script.onload = function() {
      window.insights.init({
        clientKey: 'cl_e6e03b8b-53b5-4d63-a427-9ebc20eef218'
      });
    };
    document.head.appendChild(script);
  })();
