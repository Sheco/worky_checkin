## Proof of concept to programatically checkin/checkout on worky

This code is for educational purposes only.

The intention is to show how to checkin/checkout programatically, sending crafted entry and exit dates.

### Installation

Requirements: node 14

- Run `npm install`

### Usage

The run.mjs script's signature is:

```
nodejs run.mjs {--user username} [--checkin entry_date] [--checkout exit_date]
username: email address for your Worky account
entry_date: full checkin date (YYYY-MM-DD HH:mm) 
exit_date: full checkout date (YYYY-MM-DD HH:mm)

The dates are expected as a single variable so make sure they're quoted.
The script will ask for the password when ran.
```

For example:

```
$ node run.mjs --user user@email.com "2021-10-10 9:00" "2021-10-10 17:00"
```

There's also a checkin_random.js script, which is a convenience script to checkin and out with randomized times (30 minutes before 9am and 30 minutes after 5pm)

```
$ node checkin_random.mjs --user user@mail.com
```
