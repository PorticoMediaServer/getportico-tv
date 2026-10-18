---
title: Scan and refresh a library
description: When Portico should look for files, and when it should update details for items it already knows.
category: media
order: 6
audience: Server owners
updated: 2026-10-18
---

Portico has two separate actions for keeping a library up to date: a scan and a metadata refresh.

## Scan

A scan checks the library's folders for files that were added, changed, moved or removed. Run one after you change what's in a library or how it's organized.

Open **Settings → Server → Libraries**, choose a library and select **Scan now**. To reread every file, including unchanged files, use **More → Scan all files**. For one folder, use **Scan this folder** from that folder's actions.

## Metadata refresh

A metadata refresh fetches details again for items Portico already knows about, such as titles, summaries, people, ratings and artwork. Use **More → Refresh metadata** on a title that offers it. It won't fix an unreadable folder or a missing file.

## Use the narrowest action

- If only one item's details are wrong, refresh that item.
- If files changed in one library, scan that library.
- After a broad storage change, a full-server operation can help. It creates more work, though, and makes problems harder to isolate.

## Scheduled work

Portico supports scheduled jobs and watches folders where the platform permits it. Review the library's **Scanning** tab and **Settings → Server → Schedule** before running large jobs during busy playback hours. Each folder also has a **Rescan interval** setting, including **Only when I ask**.
