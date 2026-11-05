# Security Policy

Interstellar is a static website: a canvas simulation that runs entirely in your
browser. It has four runtime dependencies, all from
[`@interstellar-tools`](https://github.com/phun-ky/interstellar-tools) and
bundled into the site at build time. How dependencies are chosen, tracked and
kept clear of known vulnerabilities is described under
[Dependencies](#dependencies).

## Supported Versions

There are no versioned releases. Only the latest `main` is supported, and the
site is built from it. Fixes land on `main`; there are no branches or older
versions to patch.

## Reporting a Vulnerability

Report vulnerabilities privately, either with GitHub's
[private vulnerability reporting](https://github.com/phun-ky/site-interstellar/security/advisories/new)
or by email to <security@phun-ky.net>. Please don't open a public issue for a
security problem.

## How Reports Are Handled

1. **Acknowledgement:** you'll get a reply within 7 days confirming the report
   was received.
2. **Assessment:** the maintainer reproduces the issue and judges its severity,
   and may ask you for details.
3. **Fix:** a fix is developed in a private GitHub security advisory and merged
   to `main`. The aim is a fix within 30 days for serious issues.
4. **Disclosure:** the advisory is published when the fix is live, with a CVE
   where one applies. Please keep the issue private until then.
5. **Credit:** reporters are credited in the advisory, unless they ask to stay
   anonymous.

## Security Expectations

What you can rely on:

- **No data collection.** No analytics, no cookies, no local storage. The page
  sends nothing anywhere.
- **No outside input.** The page reads nothing from the URL, from storage or
  from the network. All HTML it builds comes from data bundled with the site,
  and the body names and facts in the info panel are escaped as well. No `eval`
  or `new Function`.
- **One third party.** The only request to another site is for the IBM Plex Sans
  Condensed font from Google Fonts (`fonts.googleapis.com` and
  `fonts.gstatic.com`), which sees your IP address and browser like any web
  request.

What you can't rely on:

- **A Content Security Policy.** The page doesn't set one yet.
- **Availability.** The site is static and has no service level.

## Dependencies

**Choosing them.** The fewer runtime dependencies, the better. A new one is
discussed in an issue first, and must be widely used, actively maintained and
under an OSI-approved licence compatible with GPL-3.0. Development dependencies
follow the same rules, judged more loosely.

**Obtaining them.** Packages come only from the npm registry, with exact
versions locked in `package-lock.json` and installed with `npm ci` in CI. GitHub
Actions are pinned to commit SHAs.

**Tracking them.** Dependabot proposes version updates weekly, two weeks after a
release, and security updates as soon as an advisory is published. Every pull
request runs
[dependency review](https://github.com/phun-ky/site-interstellar/blob/main/.github/workflows/dependency-review.yml).

**Fixing known vulnerabilities.** Findings are checked against the GitHub
Advisory Database:

| Finding                    | Where                  | What happens                                                                        |
| -------------------------- | ---------------------- | ----------------------------------------------------------------------------------- |
| Critical or high           | Runtime dependency     | Blocks merging (dependency review); fixed and deployed within 7 days                |
| Critical or high           | Development dependency | Blocks merging when introduced; an existing one is fixed within 30 days             |
| Moderate or low            | Any dependency         | Fixed with the next update that reaches it, within 90 days of a fix being reachable |
| Licence outside the policy | New dependency         | Not merged                                                                          |

**Accepted exceptions.** A vulnerability that can't be fixed yet and can't be
exploited through this project may be allowed in dependency review, with the
reason listed here. There are none.

## Code Scanning

CodeQL (GitHub default setup) analyses JavaScript and TypeScript on every pull
request and every push to `main`. OpenSSF Scorecard runs weekly and on every
push to `main`.

The merge ruleset on `main`
([`.github/rulesets/main-merge-rules.json`](.github/rulesets/main-merge-rules.json))
blocks merging while CodeQL reports an error or a security alert of high or
critical severity, and requires the `check`, `dependency-review` and `DCO`
checks to pass on a branch that is up to date with `main`. Repository admins can
bypass it. A second ruleset stops force pushes to `main` and its deletion, with
no bypass.

## Secrets

The workflows use no repository secrets. They run with the short-lived
`GITHUB_TOKEN` GitHub issues for each run, read-only unless a job asks for more.

- **Storage:** any secret would be kept only as an encrypted GitHub Actions
  secret, never in the repository. Secret scanning with push protection blocks
  commits that contain one.
- **Access:** only the maintainer can view or change secrets, and they are not
  available to workflows run from forks.
- **Rotation:** at least once a year, and immediately if one may have been
  exposed.
