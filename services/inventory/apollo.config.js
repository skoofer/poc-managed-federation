// apollo service:push --serviceURL=http://localhost:4004/ --serviceName=inventory
// apollo service:check --serviceName=inventory

module.exports = {
    service: {
      // Must match the name of your graph in Graph Manager
      name: 'poc-managed-federation',
  
      // EITHER THIS
      endpoint: {
        url: "http://localhost:4004"
      }
    }
  };