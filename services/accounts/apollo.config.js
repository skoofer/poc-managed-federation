// apollo service:push --serviceURL=http://localhost:4001/ --serviceName=accounts
// apollo service:check --serviceName=accounts

module.exports = {
    service: {
      // Must match the name of your graph in Graph Manager
      name: 'poc-managed-federation',
  
      // EITHER THIS
      endpoint: {
        url: "http://localhost:4001"
      }
    }
  };