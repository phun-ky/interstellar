# Rulesets

Branch rulesets for `main`, kept here so they can be reviewed and reapplied.
GitHub does not read these files; they are applied by hand.

| File                                                       | What it does                                                                                                                                                                                                                                                                                   | Bypass            |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`main-merge-rules.json`](./main-merge-rules.json)         | Changes go through a pull request, merged with a merge commit, with every review thread resolved. The `check`, `dependency-review` and `DCO` checks must pass on a branch that is up to date with `main`. CodeQL results with an error, or a security alert of high or above, block the merge. | Repository admins |
| [`main-protect-history.json`](./main-protect-history.json) | No force push to `main` and no deletion of `main`.                                                                                                                                                                                                                                             | Nobody            |

## Before applying

1. Install the [DCO app](https://github.com/apps/dco) on this repository.
2. Open or update a pull request with signed-off commits and check that a `DCO`
   status appears and passes. A required check that never reports blocks every
   pull request.
3. Check that `check` (from `.github/workflows/check.yml`) and
   `dependency-review` (from `.github/workflows/dependency-review.yml`) have
   both reported on a pull request at least once.

## Apply

In the browser: Settings, Rules, Rulesets, New ruleset, Import a ruleset, then
pick one of the files. Repeat for the other.

Or with the GitHub CLI, as a repository admin:

```sh
gh api -X POST repos/phun-ky/interstellar/rulesets --input .github/rulesets/main-protect-history.json
gh api -X POST repos/phun-ky/interstellar/rulesets --input .github/rulesets/main-merge-rules.json
```

## Check

```sh
gh api repos/phun-ky/interstellar/rules/branches/main --jq '.[].type'
```

The output lists `non_fast_forward`, `deletion`, `pull_request`,
`required_status_checks` and `code_scanning`.

## Update

Change the file here first, in a pull request, then apply it over the existing
ruleset:

```sh
gh api repos/phun-ky/interstellar/rulesets --jq '.[] | "\(.id) \(.name)"'
gh api -X PUT repos/phun-ky/interstellar/rulesets/<id> --input .github/rulesets/<file>.json
```

## Signing off commits

Every commit needs a `Signed-off-by` line
([DCO](https://developercertificate.org/)). `npm install` sets `core.hooksPath`
to `.githooks`, where `prepare-commit-msg` adds the line from
`git config user.name` and `user.email` unless it is already there.
`git commit -s` does the same by hand.
