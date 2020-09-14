const {Command} = require('@oclif/command')
const {cli} = require('cli-ux')

class PlusCommand extends Command {
  async run() {
    // const {flags} = this.parse(PlusCommand)
    const firstNumber = Number(await cli.prompt('Digite o primeiro numero'))
    const lastNumber = Number(await cli.prompt('Digite o segundo numero'))
    if (firstNumber && lastNumber) {
      const res = firstNumber + lastNumber
      this.log(`este é o resultado da soma : ${res}`)
    } else {
      this.warn('por favor digite apenas numeros')
    }
  }
}

PlusCommand.description = `Soma 2 numeros
...
Extra documentation goes here
`

module.exports = PlusCommand
