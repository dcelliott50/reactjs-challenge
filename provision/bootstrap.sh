#!/bin/sh

############################
#
# REACTJS-CHALLENGE.CAREVIRTUE.VM
#
#  Development Bootstrap
#
#  Ubuntu 20.04
#  https://www.ubuntu.com/
#
#  Packages:
#   nvm
#   Node.js 14
#
#  date: July, 2021
#
############################


#################
#
# System Updates
#
#################

# get list of updates
apt update

# update all software
apt upgrade -y


###################
#
# Install NodeJS
#
###################

# install NVM
su - vagrant -c "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"

# install NodeJS
su - vagrant -c "source ~/.nvm/nvm.sh; nvm install 14.17.3"
