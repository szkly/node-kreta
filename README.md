# node-kreta

🎒 A Node.js API wrapper for KRÉTA!

## Features

- Get every (or only the latest) evaluation, recorded absence, note or upcoming exam
- Get your lessons for any week from your timetable
- Get all cancelled or substituted lessons from your timetable
- Get your average grades
- Get all your homework
- Add or delete your own homework for any lesson
- Get all the information that is stored about you in KRÉTA


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

It wouldn't have been possible without the ~~always up-to-date~~ now archived [API documentation](https://github.com/boapps/e-kreta-api-docs "e-kreta-api-docs"), which ~~is~~ was maintained by [boapps](https://github.com/boapps)!
