# Governance

Interstellar is a personal project with a single maintainer, who is also its
author. This document describes how decisions are made, who does what, and what
happens if the maintainer can't continue.

## Model

The project follows a **maintainer-led** model: the maintainer makes the final
decision on what goes into the simulation, guided by the [roadmap](ROADMAP.md)
and the discussion with contributors.

Decisions are made in public:

- **Proposals** are made as
  [GitHub issues](https://github.com/phun-ky/site-interstellar/issues). Larger
  changes, such as a new view, a new kind of body or a change to what the site
  loads or stores, are discussed in an issue before work starts. When a decision
  is made, it is written in the issue as a comment starting with "Decision".
- **Changes** are made as pull requests, reviewed by the maintainer, and merged
  with a merge commit once the checks pass. Every merge to `main` is deployed.
  The [contributing guide](CONTRIBUTING.md) describes the checks.
- **Disagreements** are resolved by discussion in the issue or pull request. If
  that doesn't settle it, the maintainer decides and explains why.
- **Conduct** is governed by the [Code of Conduct](CODE_OF_CONDUCT.md), which
  the maintainer enforces.
- **Security reports** are handled privately, as the
  [security policy](SECURITY.md) describes.

## Roles

| Role            | Who                                                                        | Responsibilities                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Maintainer**  | Alexander Vassbotn Røyne-Helgesen ([@phun-ky](https://github.com/phun-ky)) | Sets the direction and roadmap; triages issues; reviews and merges pull requests; handles security reports; enforces the Code of Conduct; manages the repository and the site |
| **Contributor** | Anyone who opens an issue or a pull request                                | Follows the [contributing guide](CONTRIBUTING.md) and the Code of Conduct; signs off commits; runs the checks a change touches                                                |

### Becoming a maintainer

Contributors who have made sustained, high-quality contributions may be invited
to become maintainers. A new maintainer gets write access to the repository and
is added to this document, and from then on a pull request needs a review from a
maintainer other than its author before it is merged.

Before anyone is given write access or any other escalated permission, the
maintainer reviews their contribution history and confirms that their GitHub
account uses two-factor authentication. They get the lowest role that lets them
do the work, and the change is recorded in the roles table above.

## Continuity

Today, one person holds everything needed to run the project: admin access to
the [GitHub repository](https://github.com/phun-ky/site-interstellar) and the
`phun-ky.net` domain the site is served from.

- **Deploys** run from GitHub Actions to GitHub Pages on every merge to `main`,
  with no personal tokens. Anyone with write access to the repository can
  deploy.
- **The code** is licensed under the [GPL-3.0](LICENSE), so anyone can fork it
  and keep the simulation running elsewhere if the project stops.
- **A second person with access** doesn't exist. Until there is one, the site
  can't continue at `phun-ky.net` if the maintainer is unavailable; it would go
  on being served by GitHub Pages as it is until the domain lapses.
