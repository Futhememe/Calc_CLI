const {Command} = require('@oclif/command')
const {cli} = require('cli-ux')

class MultiplyCommand extends Command {
  async run() {
    // const {flags} = this.parse(MultiplyCommand)
    const firstNumber = Number(await cli.prompt('Digite o primeiro numero'))
    const lastNumber = Number(await cli.prompt('Digite o segundo numero'))
    if (firstNumber && lastNumber) {
      const res = firstNumber * lastNumber
      this.log(`este é o resultado da multiplicação : ${res}`)
    } else {
      this.warn('por favor digite apenas numeros')
    }
  }
}

MultiplyCommand.description = `Multiplica 2 numeros
...
Extra documentation goes here
`

module.exports = MultiplyCommand
