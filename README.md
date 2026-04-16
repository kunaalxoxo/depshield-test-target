# depshield-test-target

🎯 **Intentionally vulnerable Node.js app for DepShield / FixStack demo.**

This repo contains deliberately outdated and vulnerable npm dependencies to demonstrate DepShield's automated security remediation pipeline.

## Vulnerable Dependencies

| Package | Version | CVE | Severity |
|---------|---------|-----|----------|
| lodash | 4.17.15 | CVE-2019-10744 | HIGH |
| axios | 0.21.1 | CVE-2021-3749 | MEDIUM |
| express | 4.17.1 | CVE-2022-24999 | HIGH |
| minimist | 1.2.5 | CVE-2021-44906 | CRITICAL |
| node-fetch | 2.6.0 | CVE-2022-0235 | HIGH |

## How DepShield fixes this

1. Receives push event via GitHub webhook
2. Fetches this `package.json` via GitHub Contents API
3. Queries OSV.dev for each dependency
4. Plans and validates patch versions (with retry loop)
5. Creates a branch `fixstack/patch-*` and opens a PR with updated versions

> This repo is used as the live demo target for the DepShield Agentathon submission.
