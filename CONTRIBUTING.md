Contributing
=====

License
-----

[MIT](https://raw.github.com/gocom/resolution/master/LICENSE).

Versioning
-----

[Semantic Versioning](https://semver.org/).

Requirements
-----

* GNU make
* Node.js
* npm

Setup project locally
-----

Clone the repository, or a fork of it, and run the installer:

````shell
$ make install
````

Development
-----

For available commands, see:

```shell
$ make help
```

Publishing
-----

CI automatically publishes any git tags to the npm registry.

### Update changelog

Before tagging a commit, make sure that [CHANGELOG.md](https://raw.github.com/gocom/resolution/master/CHANGELOG.md)
is up-to-date. The top most section and the version number in the heading should match the new tag you are about
to create.

### Tagging release

To publish a new version, simply create a tag and push it:

```shell
$ git tag -a 0.1.0 -m 0.1.0
$ git push origin 0.1.0
```

The above would create publish the tag as `0.1.0` to the npm registry, and create release on a GitHub, using
a section with matching header from the CHANGELOG.md as the release's description. Updating version number in
the `package.json` file is not necessary, as CI sync it during build time with the tag.

### Manually testing publishing

This is not required, but if you want to test publishing before tagging, you can run the same building command CI uses:

```shell
$ make rebuild
```

You can then either pack the npm package, or even publish it to registry as a pre-release or to a private
registry:

```shell
$ make pack
```

The above would pack a tar of the build results, which allows you to verify that everything is alright before
publishing, or locally loading the packed archive to a some locally installed project where the package is being used
as a form of testing.

In cases CI fails, or for some other reason, you need to publish manually, run the normal npm publish command:

```shell
$ npm publish --registry http://localhost:4873
```

The above would publish the package to a registry running at `localhost:4873`.
