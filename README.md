# EB Templater

[![NPM](https://nodei.co/npm/ebtemplater.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ebtemplater/)

[![Build Status](https://travis-ci.org/Cox-Automotive/ebtemplater.svg?branch=master)](https://travis-ci.org/Cox-Automotive/ebtemplater)

## About

EB Templater is a CLI which provides basic inheritance for Elastic Beanstalk configurations files. This allows you do create base configuration file(s) that each environment's configuration can inherit from reducing duplicate configurations across environments. For examples check out the examples directory. Recursion is supported, so feel free to use the `extends` directive in as many files as you like.

## Prerequisites

To install and use the EB Templater, you will need Node.js (version 4 or greater) and NPM ([nodejs.org](https://nodejs.org/en/download/package-manager)).

## Installing

EB Templater is meant to be installed via NPM.

```
npm install -g ebtemplater
```

## Running

After installing EB Templater will be available on your path.

### Options

To see a what options are available to a command ask for help:

    ebtemplater help

# Usage

### `ebtemplater`

`ebtemplater`  takes a file path to your configuration YAML file. This YAML file can contain extends directives to inherit settings from additional files. A YAML file can inherit from as many YAML files as you like, simply provide the `extends` directive which takes a set:

```
extends:
- !extend
  filePath: ./base.yml
- !extend
  filePath: ./vars.yml
```

Arguments:

* `-o, --output <output file>` File to save generated configuration to
* `-v, --verbose`, Be verbose (defaults to `false`)