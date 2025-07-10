Contributing
=====

License
-----

[MIT](https://raw.github.com/gocom/resolution/master/LICENSE).

Versioning
----

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
----

To publish a first version of the package, first check out the git commit you want to publish, and edit the version
number in `package.json`, by bumping it up according semantic versioning rules. Then build and publish a new version
of the package to the registry and tag the published commit in the git repository:

```shell
$ make rebuild
$ make publish
$ git tag -a 0.1.0 -m 0.1.0
$ git push origin 0.1.0
```

Where in the above, `0.1.0` is the same version number that you used in `package.json`. You can omit the `rebuild`
step if the build is already the one you want. Running it again will affect the file checksum.
