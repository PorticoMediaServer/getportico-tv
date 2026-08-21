---
title: Install on Linux
description: Install Portico Server as a managed service on a supported Linux system.
category: install
order: 3
audience: Server owners
updated: 2026-07-12
---

Download the Linux package for the architecture of your server. Use a normal administrative account and keep Portico's executable, configuration, data, and media paths separate.

## Service account

Run Portico under a dedicated service account. Grant that account read access to library folders and write access only to the Portico data folder and other paths Portico must manage.

## Start Portico at boot

Install the supplied service definition for your distribution, enable it, and start the service. Do not use a terminal session as the normal production process.

## Firewall

Allow the Portico service from the networks that should reach it. Keep database files, administrative operating-system services, and unrelated ports private.

## Verify after restart

Restart the host and confirm that the Portico service is active, its media mounts are present, and a local client can connect.
