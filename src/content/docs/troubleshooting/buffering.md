---
title: Buffering during playback
description: Find out whether buffering comes from the file, the playback method, server load, storage or the network.
category: troubleshooting
order: 4
audience: Everyone
updated: 2026-10-18
---

## Check whether it's one file

Play another item on the same device. If only one file buffers, compare its format, bitrate, tracks, subtitles and storage with an item that plays well.

## Read the active stream

As an owner or administrator, open **Settings → Dashboard** in the **Server** section. **Watching now** shows the viewer, device, playback state, delivery method, local or remote location, bitrate when available, and start time. Record those details while the problem is happening.

Also note the selected quality, video and audio codecs and subtitle track from the player or media details where available. Use the matching conversion logs for further diagnostics.

A transcode can be held back by CPU load, hardware acceleration or temporary storage. Burning a subtitle into the picture can add work. Check **Settings → Streaming** in the **Server** section and the matching logs under **Settings → Troubleshooting**.

## Check the network for direct play

Compare the media bitrate with what the network path can carry. Where possible, test wired Ethernet. Try the server directly on the same network to check whether Wi-Fi, a VPN or remote upload capacity is involved.

## Try a lower quality

Lower the player's quality as a test. If that helps, check **Settings → Quality & data** for **At home** and **Away from home**, then ask the owner to check **Streaming limits** under **Settings → Streaming**. Check the server's home-network classification under **Settings → Remote access** too. Don't leave quality turned down without checking why it was needed.

## If it still buffers

- If every transcode buffers, collect the playback details and matching server log events. [Connection troubleshooting basics](/docs/troubleshooting/connection-basics/) lists log locations.
- If only one device has the problem, read [How clients differ](/docs/clients/client-differences/).
- If playback fails instead of buffering, go to [Playback failed](/docs/troubleshooting/playback-failed/).
