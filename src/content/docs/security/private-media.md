---
title: Where private media travels
description: Why Portico Cloud doesn't relay or store your media.
category: security
order: 2
audience: Everyone
updated: 2026-10-18
---

Portico Cloud never carries your video or audio. An authorized Portico app streams private media directly from the Portico Server that holds it, over a verified local or remote connection.

## What Portico Cloud does

Portico Cloud helps an account find the servers it can use and supplies signed connection information. It doesn't relay, tunnel, cache, inspect, transcode or store the media stream.

## What this means for server owners

Because media doesn't pass through Portico Cloud, the server owner keeps control of storage, upload capacity, playback work and library permissions. It also means remote playback only works when the server and its internet connection are available.

## Artwork and metadata

Private-library metadata and artwork served by Portico Server require authorization. Before serving a protected file, the server checks that the requesting account and profile have access, or that a valid permission was issued for that resource.

Save-for-later items appear under **Saved → My List**. My List, history and other personal media state belong to the selected profile on the server. They aren't sent to Portico Cloud.

## External services you choose

Metadata and artwork providers can receive lookup requests from your server. Owner-configured webhooks can send titles and playback events to a chosen destination. These are separate from Portico Cloud's account and connection coordination; check which services the owner has enabled.
