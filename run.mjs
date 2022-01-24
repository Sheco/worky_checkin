import Worky from './worky.mjs'
import minimist from 'minimist'
import passprompt from 'password-prompt'

function usage() {
  console.error("Usage: node checkin.js {username} {entry_date} {exit_date}")
  console.error("The password is read from the standard input, so you can either")
  console.error("type it or pipe it in like node checkin.js {args...} < password.txt")
  process.exit(1)
}

var args = minimist(process.argv.slice(2));

const username = args.user

const password = await passprompt('Password: ')
const worky = new Worky()
try {
  await worky.login(username, password)
  if (args.checkin) {
    await worky.checkin(args.checkin)
    console.log(`Checking in at ${args.checkin}`)
  }

  if (args.checkout) {
    await worky.checkout(args.checkout)
    console.log(`Checking out at ${args.checkout}`)
  }
  process.exit(0)
} catch (errors) {
  console.error('ERROR', errors)
  process.exit(1)
}
