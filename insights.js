// Load and initialize Uniqode Insights SDK
(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.uniqode.com/insights/pixel.js';
    script.onload = function() {
      window.insights.init({
        clientKey: 'cl_fdfc0147-6dc7-4c9a-8727-dc430242bded'
      });
    };
    document.head.appendChild(script);
  })();