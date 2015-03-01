# Ltinator
[LightTable](https://github.com/LightTable/LightTable) plugin to switch your working environment. Inspired by [tmuxinator](https://github.com/tmuxinator/tmuxinator).

Working environment means `workspace`, `tabsets` and `tabs` of LightTable.

## Installation

Install this plugin by using LightTable's plugin manager (Ctrl-Space -> `Plugins: Show plugin manager`).

## Setup

Add the following to your `user.behaviors` (Ctrl-Space -> `Settings: User behaviors`)

    [:app :lt.plugins.ltinator/set-directory "directory path to save project files"]

## Usage

### Open

You can open a project (working environment) to select `Ltinator: Select project to open` from the command panel or set the following key bind to your `user.keymap` (Ctrl-Space -> `Settings: User keymap`) and hit the keys.

    [:app "ctrl-shift-o" :ltinator.open-project]

Set your preferable keys to `ctrl-shft-o` part.

### Save

You can save a project to select `Ltinator: Save project from current working environment` from the command panel or set the following key bind to your `user.keymap` and hit the keys.

    [:app "ctrl-shift-s" :ltinator.save-project]

Set your preferable keys to `ctrl-shft-s` part.

### Auto save

You can save current working environment (project name: `auto-saved`) to set the following to your `user.behaviors` at the timing of LightTable closed.

    [:app :lt.plugins.ltinator/auto-save true]


### Auto load

You can load `auto-saved` project automatically to set the following to your `user.behaviors` at the timing of LightTable started.

    [:app :lt.plugins.ltinator/auto-load true]

## Changelog

* 0.0.1 Initial release.

## License

Copyright (C) 2015 Satoshi Kondo (snufkon).

This software is released under the MIT License, see [LICENCE](https://github.com/snufkon/Ltinator/blob/master/LICENSE) for details.
