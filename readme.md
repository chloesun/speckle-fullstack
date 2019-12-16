# Speckle Server

[![DOI](https://zenodo.org/badge/74043433.svg)](https://zenodo.org/badge/latestdoi/74043433) [![Build status](https://ci.appveyor.com/api/projects/status/xo9uun3wdo5x8538?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/speckleserver) ![Discourse status](https://img.shields.io/discourse/https/discourse.speckle.works/status.svg) ![GitHub](https://img.shields.io/github/license/speckleworks/speckleserver.svg) ![Twitter Follow](https://img.shields.io/twitter/follow/speckle_works.svg)

This is the Speckle Server, which coordinates communications between the various bits of the Speckle ecosystem.

## API

[API docs are here](https://speckleworks.github.io/SpeckleSpecs/) - they are a good overview of what you can do.

## Installation

The Speckle Server is a nodejs (`v.8+`, `latest stable` preffered) app.

- Dependencies: [mongodb](https://docs.mongodb.com/manual/administration/install-community/) and [redis](https://redis.io/download#installation).
- Clone this repo `git clone https://github.com/speckleworks/SpeckleServer.git`
- Configuration: create a `.env` using `.env-base` as a template, and fill in the required information.
- Run `npm install` and thereafter `npm start`.

#### ⚠️ **Warning**: if these instructions seem confusing and you want to use speckle in production, please consult someone with more experience! Incorrect configuration can have **security and reliability implications**.

> Community supported instructions by on how to set up a development server (thanks @arendvw!) can be found in [this discourse thread](https://discourse.speckle.works/t/speckle-server-debian-9-installation-notes-for-development-machines/344). Feel free to contribute your own experiences there, or ask questions.

#### 🍰 If you just want to try out speckle, at your own risk, you can use `https://hestia.speckle.works/api`.

**Note**: hestia is hosted on Digital Ocean. If you want to signup to digital ocean and support the running costs of speckle, use [the following affiliate link](https://m.do.co/c/947a2b5d7dc1) to get \$100 in credit.

To install a front-end plugin, such as the [admin ui](https://github.com/speckleworks/SpeckleAdmin), clone the respective repo in the `plugins` folder of the server.

## Get In Touch

If you have any questions, you can get in touch with the rest of the world-wide specklers via:

- [Discourse](https://discourse.speckle.works)
- [Slack](https://slacker.speckle.works)

## License

[MIT](https://github.com/speckleworks/SpeckleServer/blob/master/LICENSE)
