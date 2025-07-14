# Changelog

The changelog will also contain upcoming versions. Refer to tags, GitHub releases or npm registry for the latest
release.

## 0.1.0

* Initial release.

## 0.1.0-alpha.5

* Fixing issue with GitHub release creation in CI.
* Fixing issue with README.md and CHANGELOG.md update during npm publish CI. They ended up as empty files inside the
  created tgz.
* This release is tagged for testing the CI. Contains no runtime or code changes.

## 0.1.0-alpha.4

* Updated internal release CI and documentation generation. GitHub release now links to documentation that is
  built on the tagged version.

## 0.1.0-alpha.3

* Added build provenance to published packages, when the publishing is done through GitHub Actions.

## 0.1.0-alpha.2

* Fix packages initial publishing. Added `--access public` flag to the `npm publish` command that is ran from CI.

## 0.1.0-alpha.1

* Initial alpha release.
