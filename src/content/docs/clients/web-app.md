---
title: Use Portico on the web
description: Use the hosted web app, or the browser app served by your own Portico Server.
category: clients
order: 2
audience: Everyone
updated: 2026-10-18
---

Portico Web runs bundled with your Portico Server and at [web.getportico.tv](https://web.getportico.tv).

## The bundled app

Open your server's address in a browser, including its port. The default is 32500, for example `http://192.168.1.20:32500` on your home network. The bundled app connects to that server.

Use it for first-run setup, owner access and direct sign-in to an account created on the server. Servers linked to a Portico Account also offer Portico Account sign-in. See [Connect a Portico app](/docs/clients/connect-a-client/).

## The hosted app

Sign in at [web.getportico.tv](https://web.getportico.tv) with your Portico Account to open servers shared with you. Portico verifies the server's route and identity before opening it.

The hosted app doesn't relay your media. Your browser requests authorized media directly from the selected Portico Server.

## Browser permissions and playback

Use a current browser. Allow fullscreen, media playback or local-network access when requested for an action you chose. Browser codec support affects whether media can play directly or needs conversion.

The web player has its own volume control in addition to your operating system's volume. Browser certificate and mixed-content rules still apply: native apps' support for an owner's certificate doesn't change what a browser trusts. For local HTTP access, use the bundled app at the server's address.
