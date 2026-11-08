---
title: "Example: voice pipeline latency spike"
date: 2026-11-04
type: incident
severity: SEV3
status: resolved
duration: "1h 30m"
impact: "p95 turn latency rose from 800ms to 4s"
project: "Voice pipeline"
summary: "Placeholder incident report showing the layout. Delete or replace it."
tags: [latency, example]
---

## Summary
Placeholder text — this shows how an incident report renders.

## Timeline
- **10:02** — Latency alert fired
- **10:20** — Traced to a cold model load
- **11:30** — Warm pool deployed

## Root cause
Model was reloaded on every request.

## Action items
- [ ] Add a latency regression test
