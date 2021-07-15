# ReactJS Challenge Single-Page Application

Welcome to Whiplash Technology's ReactJS Challenge!

To take the challenge, clone this repository to your local development environment and follow the steps below.

## Setup

There are two ways to setup this project locally: using the provided Vagrant virtual machine or using your own host.

### Vagrant Setup

To install the Vagrant virtual machine, make sure you have installed Vagrant (https://www.vagrantup.com/) and a virtual machine provider, such as VirtualBox (https://www.virtualbox.org/).

#### Provision Virtual Machine and Start Server

Sets up the virtual machine development environment.

```ssh
> vagrant up
> vagrant ssh
$ cd /vagrant/application
$ npm install
$ npm start
```

Also, to access the web application from your host machine you should update your local DNS to point the development domain to the virtual machine's IP address. For example, on a Mac/Linux box you can update your `/etc/hosts` file with the following line:

```
172.29.19.250 reactjs-challenge.carevirtue.vm
```

#### Browser Access

URL: http://reactjs-challenge.carevirtue.vm:3000/

### Local Setup

If you already have a local development environment with Node.js then you can install and run the project in the normal way.

#### Provision Local Host and Start Server

Sets up the local development environment.

```ssh
$ cd application
$ npm install
$ npm start
```

#### Browser Access

URL: http://localhost:3000/

## Challenge

This project is a simple single-page application (SPA) that reads the price of Bitcoin from a public API and displays some price information in the browser. The application is incomplete, and the challenge is to finish the tasks to complete the application.

The API used comes from CoinDesk. Its documentation can be found here: https://www.coindesk.com/coindesk-api.

Start here: `application/src/App.js`

### 1) Add the Euro Price to the "Price of Bitcoin" Card

The card on the left, "Price of Bitcoin," currently allows the user to select the current price in US Dollars or British Pound Sterlings. Add the option to show the price in Euro as well.

### 2) Show the Mean, Median, Highest and Lowest Values for the Most Recent Week

The card on the right, "Historical Price of Bitcoin," is currently empty. Collect prices for everyday of the past week (including today) and show the mean, median, highest and lowest values for the entire week.

### 3) Show Aggregate Values for Multiple Weeks

Improve the output for the "Historical Price of Bitcoin" card by showing weekly aggregate results (mean, median, highest and lowest) for up to 4 weeks. Have the main `<App />` component pass the number of weeks to the `<HistoricalPriceCard />` sub-component.

#### Example:

Below is an example of what the app might look like when completed.

![Finished Example](/data/finished-app.png)
