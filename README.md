# Givecloud's Technical Assessment


## Installation

To run this starter kit, you will need to setup a local development environment.
You can follow instructions based on your OS [here](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/)

## Spin it up!
Start your newly created environment by running the `ddev start` command.

First time will take some time as images need to be downloaded.

## Setup
Once your environment is up and running, you will need to run a couple commands

#### Step 1
Install composer's dependencies
`ddev composer install`


#### Step 2
Install npm's dependencies
`ddev npm install`


#### Step 3
Install Laravel's stuff
`ddev php artisan key:generate --ansi`
`ddev php artisan migrate --graceful --ansi` 


#### Step 4
Build your assets, and watch for changes
`ddev npm run dev`

> Note: on Windows, you may have issues with `ddev npm run dev`. If you run into issues, please run `ddev npm run build` whenever you want to see your changes. 

#### We are good to go!
Your local testing environment is now ready to be accessed here `https://fullstack-technical-starter.ddev.site/` 

## What's included?

- [TailwindCSS](https://tailwindcss.com/docs)
- [Vite](https://vite.dev/)
- React through `@vitejs/plugin-react` 





