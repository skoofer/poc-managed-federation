// apollo service:push --serviceURL=http://localhost:4003/ --serviceName=products
// apollo service:check --serviceName=products

module.exports = {
    service: {
      // Must match the name of your graph in Graph Manager
      name: 'poc-managed-federation',
  
      // EITHER THIS
      endpoint: {
        url: "http://localhost:4003"
      }
    }
  };