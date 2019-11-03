# 🎒 node-kreta

A Node.js API wrapper for KRÉTA!

## Features

This library's functions help in the following:

- Get every or only the latest evaluation(s), absence(s), note(s) or upcoming exam(s)
- Get your lessons for any week from your timetable
- Get all cancelled or substituted lessons easily
- Get average grades easily
- Get all information that is stored about you in KRÉTA
- Get all homework which was given by a teacher
- Add or delete personal homework for any lesson

## Installation

Using npm:

    npm install node-kreta

## Example

    const Kreta = require('node-kreta');
    const kreta = new Kreta();

    const instituteCode = 'klik000000000';
    const username = '12345678912';
    const password = '1970-01-01';

    (async () => {
	    // We store the bearer object which contains the accesss token and refresh token
	    const bearer = await kreta.login(instituteCode, username, password);

	    // We pass on the institute code and the access token which we received earlier
	    const absences = await kreta.getAbsences(instituteCode, bearer.accessToken);

	    console.log(absences);
    })();