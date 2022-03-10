import Worky from './worky.mjs'
import minimist from 'minimist'
import 'dotenv/config'

function usage() {
  console.error("Usage: node checkin.js [--checkin entry_date] [--checkout exit_date]")
  process.exit(1)
}

var args = minimist(process.argv.slice(2));

const username = process.env.WORKY_USER
const password = process.env.WORKY_PASS

if (!username) {
  usage() 
}

const worky = new Worky()
try {
  await worky.login(username, password)
  if (args.checkin) {
    console.log(`Checking in at ${args.checkin}`)
    await worky.checkin(args.checkin)
  }

  if (args.checkout) {
    console.log(`Checking out at ${args.checkout}`)
    await worky.checkout(args.checkout)
  }
  process.exit(0)
} catch (errors) {
  console.error('ERROR', errors)
  process.exit(1)
}
