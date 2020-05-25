// apollo service:push --serviceURL=http://localhost:4002/ --serviceName=reviews
// apollo service:check --serviceName=reviews

module.exports = {
    service: {
      // Must match the name of your graph in Graph Manager
      name: 'poc-managed-federation',
  
      // EITHER THIS
      endpoint: {
        url: "http://localhost:4002"
      }
    }
  };