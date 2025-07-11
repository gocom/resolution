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

Clone the repository, or a fork of it and run the installer:

````shell
$ git clone git@github.com:gocom/resolution.git
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

CI publishes git tags to the npm registry, when the tag is pushed to the git repository.

### Update changelog

Before tagging a commit, make sure that [CHANGELOG.md](https://raw.github.com/gocom/resolution/master/CHANGELOG.md)
is up-to-date. The top most section and version heading should match the tag.

### Tagging release

To publish a new version, simply create a tag and push it:

```shell
$ git tag -a 0.1.0 -m 0.1.0
$ git push origin 0.1.0
```

The above would create publish the tag as `0.1.0` to the npm registry, and create release on a GitHub, using
the top most section from CHANGELOG.md as the release's description. Updating version number in `package.json` file
is not necessary.

### Testing publishing or manually publishing

If you want to test publishing before tagging, run the same building CI uses:

```shell
$ make rebuild
```

You can then either pack the npm package, or even publish it to registry as a pre-release or to a private
registry:

```shell
$ make pack
```

The above would pack tar of the build results, which allows you to verify that everything is alright before publishing.
In cases CI fails, or for some other reason, you need to publish manually, run the normal npm publishing:

```shell
$ npm publish --registry http://localhost:4873
```

The above would publish the package to registry running at `localhost:4873`.
