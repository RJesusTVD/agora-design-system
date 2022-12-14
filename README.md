# Ágora Design System

## Core technologies

- React - version ^18.0.25 - <https://reactjs.org/>
- NextJs - version 13.0.4 - <https://nextjs.org/>
- Storybook - version ^6.5.13 - <https://storybook.js.org/docs/react/get-started/install>
- Tailwindcss - version ^3.2.4 - <https://tailwindcss.com/docs/installation>
- Radix-UI - <https://www.radix-ui.com/docs/primitives/overview/introduction>
- Node - version ^16

## Installation and start project

```sh
> npm install
> npm run storybook

```

## Build project

```sh
  > npm run build-storybook

```

## Format all files with Prettier config

To keep code and commits easy to read a custom config was made to format files to everyone on the same way. We can force this format running

```sh
  > npm run format

```

## Check Lint and Lint fix

```sh
  > npm run lint
  > npm run lint-fix

```

## Components

Each component is created under `components/ui` folder, and export like the existing examples.

# Tailwind.config.js file

File support all configurations to scss

# Considerations

- All code is analyzed by Sonnar
- The main objective is the generation of a design system library that is published on the Nexus of AMA
