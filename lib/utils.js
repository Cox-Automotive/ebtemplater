/*jslint node: true */
'use strict';

var _      = require('underscore'),
    clc    = require('cli-color'),
    path   = require('path'),
    Table  = require('cli-table2'),
    npm    = require('npm-registry-client'),
    semVer = require('semver');

var exports = module.exports = {};

exports.errorAndExit = function(errorMsg, errorObj, requestData){
    console.error(clc.red(errorMsg));
    if(errorObj){
        console.error(clc.red(JSON.stringify(errorObj, null, 4)));
    }
    process.exit(1);
};

exports.checkForUpdate = function(){
    var pkg    = require(path.join(__dirname, '../', 'package.json')),
        myVer  = pkg.version,
        app    = pkg.name,
        noop   = function(){},
        client = new npm({ log: { verbose:noop, info:noop, http:noop } });

    client.get('https://registry.npmjs.org/'+app+'/latest', { timeout: 1000 }, function (error, data, raw, res){
        if(!error){
            var latestVer   = data.version,
                needsUpdate = semVer.gt(latestVer, myVer);

            if(needsUpdate){
                var msg = [
                    clc.white('Update available '),
                    clc.blue(myVer),
                    clc.white(' → '),
                    clc.green(latestVer + '\n'),
                    clc.white('Run: '),
                    clc.green('npm i -g ' + app),
                    clc.white(' to update')
                ].join('');

                var table = new Table({
                    colWidths: [40]
                });

                table.push([ msg ]);
                console.error(table.toString());
            }
        }
    });
};