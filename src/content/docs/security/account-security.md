---
title: Protect your account
description: Use a unique password, multi-factor authentication and recovery codes, and review your devices.
category: security
order: 3
audience: Everyone
updated: 2026-10-18
---

## Use a unique password

Give your Portico Account its own password. Use a different password for a local server account. Don't share the owner's credentials with viewers.

## Turn on two-step verification

Portico Accounts and local server accounts support six-digit codes from an authenticator app (TOTP), with recovery codes. Portico doesn't offer its own passkey sign-in.

For a Portico Account:

1. Open **Settings → Profile & account** and choose **Open your account**.
2. Open **Security → Two-step verification** and select **Turn on**.
3. Confirm your password, add the supplied key to your authenticator app, then enter its code.
4. Save the recovery codes somewhere other than the device that normally gives you the second factor.

This setting applies to password sign-in. Accounts that sign in only with Google or Apple manage their sign-in security with that provider.

For an account that lives only on one server:

1. Open **Settings → Profile & account → Sign-in** in the server's web app, using the account that manages the profiles.
2. Under **Two-step verification**, select **Turn on**.
3. Confirm the account password, add the authenticator key and verify a code. Save the recovery codes shown after verification.

A profile PIN is separate from the account's password and two-step verification.

## Review devices and security events

Review access when you lose a device, change your password or see a sign-in you don't recognize.

- For a Portico Account, open **Open your account → Devices**. Review **Security** and account notifications too.
- For a local server account, open **Settings → Profile & account → Devices**. Sign out or block a device that shouldn't have access any more.

Deleting the app doesn't revoke its session. Review API keys and personal access tokens separately: changing a password or signing out everywhere doesn't revoke them. Owners manage keys under **Settings → Integrations** in the **Server** section. Other members manage **Personal access tokens** under **Settings → Profile & account**.

## For server owners

Open **Settings → People** in the **Server** section to review the person's current membership, role and library permissions. Portico Account security and server permissions are controlled separately.
