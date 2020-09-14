const {Command} = require('@oclif/command')
const {cli} = require('cli-ux')

class DivideCommand extends Command {
  async run() {
    // const {flags} = this.parse(DivideCommand)
    const firstNumber = Number(await cli.prompt('Digite o primeiro numero'))
    const lastNumber = Number(await cli.prompt('Digite o segundo numero'))
    if (firstNumber && lastNumber) {
      const res = firstNumber / lastNumber
      this.log(`este é o resultado da divisão : ${res}`)
    } else {
      this.warn('por favor digite apenas numeros')
    }
  }
}

DivideCommand.description = `Divide 2 numeros
...
Extra documentation goes here
`

module.exports = DivideCommand
