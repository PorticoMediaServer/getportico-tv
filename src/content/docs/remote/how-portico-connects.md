---
title: How Portico connects
description: How an app finds your server without sending your private media through Portico Cloud.
category: remote
order: 1
audience: Everyone
updated: 2026-10-18
---

You can connect with a Portico Account or sign in directly to an account on one server.

## What each side knows

- **Portico Cloud** manages Portico Accounts, server membership and signed connection information.
- **Your Portico Server** manages its media, local permissions, playback and server settings.

## Connect with a Portico Account

When an authorized app opens a server, it obtains short-lived signed connection information, checks the server's identity and opens a session for that server. At home it can use a verified local route; away from home it needs a reachable remote route.

## Connect directly

An account created on one server can sign in at that server's address without a Portico Account. The bundled Portico Web app already knows its server's address. It offers local username-and-password sign-in when the server keeps sign-in local; a linked server's start page offers Portico Account sign-in and owner recovery instead. In a native app, enter the address and use the account created there. See [Connect a Portico app](/docs/clients/connect-a-client/).

Direct sign-in also works away from home when the address is reachable and the owner's outside sign-in policy allows it. A local account isn't automatically a Portico Account or an entry in its server list.

## Where your media travels

Media and server-specific API requests go directly between the app and your Portico Server. Portico Cloud doesn't relay, tunnel, cache or inspect your private media.

## The server has the final say

Your server makes the final access decision, including for a request that started with a Portico Account. Cloud membership can't grant a library or action that the server doesn't allow.
