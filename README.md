# node-kreta

A Node.js API wrapper for KRÉTA!

## Features

This library's functions help in the following:

- Get every (or only the latest) evaluation, recorded absence, note or upcoming exam
- Get your lessons for any week from your timetable
- Get all cancelled or substituted lessons easily
- Get your average grades easily
- Get all the information that is stored about you in KRÉTA
- Get all the homework which was given by a teacher to you
- Add or delete personal homework for any lesson

## Installation

Using npm:

```bash
npm install node-kreta
```

## Example

```js
const Kreta = require("node-kreta");
const kreta = new Kreta();

const instituteCode = "klik000000000";
const username = "12345678912";
const password = "1970-01-01";

(async () => {
    // We store the bearer object which contains the access token and refresh token
    const bearer = await kreta.login(instituteCode, username, password);

    // We pass on the access token which we received earlier
    const absences = await kreta.getAbsences(bearer.accessToken);

    console.log(absences);
})();
```

## Contributors

It wouldn't be possible without the always up-to-date [API documentation](https://github.com/boapps/e-kreta-api-docs "e-kreta-api-docs"), which is maintained by [boapps](https://github.com/boapps)!
