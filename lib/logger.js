class Logger {
  constructor() {
    this.prefix = 'FriendsVPN Extension'
    this.logs = []
  }

  get count() {
    return this.logs.length
  }

  log(message, data) {
    const formattedMessage = `${this.prefix} (Log): ${message}`
    if (data) {
      this.logs.push({ formattedMessage, data })
      console.log(formattedMessage, data)
    } else {
      this.logs.push({ formattedMessage })
      console.log(formattedMessage)
    }
  }

  info(message, data) {
    const formattedMessage = `${this.prefix} (Info): ${message}`
    if (data) {
      this.logs.push({ formattedMessage, data })
      console.info(formattedMessage, data)
    } else {
      this.logs.push({ formattedMessage })
      console.info(formattedMessage)
    }
  }

  error(message, data) {
    const formattedMessage = `${this.prefix} (error): ${message}`

    if (data) {
      this.logs.push({ formattedMessage, data })
      console.error(formattedMessage, data)
    } else {
      this.logs.push({ formattedMessage })
      console.error(formattedMessage)
    }
    // return new Error(formattedMessage)
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger()
    }
  }

  getInstance() {
    return Singleton.instance
  }
}

module.exports = Singleton
