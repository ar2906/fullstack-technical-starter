# Givecloud's Technical Assessment


## Installation

To run this starter kit, you will need [Orbstack](https://orbstack.dev/) (or another Docker Provider) and [DDEV](https://ddev.readthedocs.io/)
You can follow instructions based on your OS [here](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/)

## Spin it up!
Start your newly created environment by running the `ddev start` command.

First time will take some time as images need to be downloaded.

### Setup
Once your environment is up and running, you will need to run a couple commands

Install composer's dependencies
`ddev composer install`

Install npm's dependencies
`ddev npm install` 

Install Laravel's stuff
`ddev php artisan key:generate --ansi`
`ddev php artisan migrate --graceful --ansi` 

## What's included?

- [TailwindCSS](https://tailwindcss.com/docs)
- [Vite](https://vite.dev/)
- React through `@vitejs/plugin-react` 





