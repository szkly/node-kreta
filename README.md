# 🎒 node-kreta

A Node.js wrapper for KRÉTA!

## Features

This library's functions help in the following:

-   Get every or only the latest evaluation(s), absence(s), note(s)
-   Get your lessons for any week from your timetable
-   Get all cancelled or subbed lessons easily
-   Get average grades easily
-   Get all information that is stored about you in KRÉTA
-   Get all homework which was given by a teacher
-   Add or delete personal homework for any lesson

## Getting started

### Installation

Using npm:

    $ npm install kreta-api

### Examples

First, you have to import the kreta-api package and initialize a new KretaApi object.

    const KretaApi = require('kreta-api');
    const kreta = new KretaApi();
