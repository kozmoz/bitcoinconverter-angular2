#!/bin/bash

ng build --prod
scp -r dist/*  vps6.juurlink.org:/home/www/sandbox.juurlink.org/http/angularjs2/

