.PHONY: all build clean generate-docs generate-release-notes help install lint lint-fix pack pre-publish rebuild test watch

NPM = npm

all: build
install: node_modules dist

build: node_modules
	$(NPM) run build

dist:
	$(NPM) run build

clean:
	rm -rf dist docs node_modules package-lock.json test-reports

lint: node_modules
	$(NPM) run lint

lint-fix: node_modules
	$(NPM) run lint:fix

node_modules:
	$(NPM) install

rebuild:
	rm -rf dist
	$(MAKE) build

pack: install
	$(NPM) pack

test: node_modules
	$(NPM) run test

watch: node_modules
	$(NPM) run watch

generate-docs: install
	$(NPM) run generate-docs

generate-release-notes:
	./dev/bin/release-notes "$(VERSION)" > RELEASE-NOTES.md

pre-publish:
	$(NPM) version "$(VERSION)" --no-commit-hooks --no-git-tag-version --allow-same-version
	./dev/bin/release-readme "$(VERSION)" > .README.md.tmp
	mv .README.md.tmp README.md
	./dev/bin/release-changelog "$(VERSION)" > .CHANGELOG.md.tmp
	mv .CHANGELOG.md.tmp CHANGELOG.md

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command] ["
	@echo "    [VERSION=<version>]"
	@echo "  ]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make build"
	@echo "  Build project"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Clean installed dependencies and artifacts"
	@echo ""
	@echo "  $$ make generate-docs"
	@echo "  Build API docs"
	@echo ""
	@echo "  $$ make generate-release-notes VERSION=<version>"
	@echo "  Build release notes"
	@echo ""
	@echo "  $$ make install"
	@echo "  Install dependencies and build project"
	@echo ""
	@echo "  $$ make lint"
	@echo "  Lint code style"
	@echo ""
	@echo "  $$ make lint-fix"
	@echo "  Try to fix code style issues"
	@echo ""
	@echo "  $$ make pack"
	@echo "  Package project locally"
	@echo ""
	@echo "  $$ make pre-publish VERSION=<version>"
	@echo "  Updates README.md and CHANGELOG.md for package publishing"
	@echo ""
	@echo "  $$ make rebuild"
	@echo "  Clean dist directory before building"
	@echo ""
	@echo "  $$ make test"
	@echo "  Run test suite"
	@echo ""
	@echo "  $$ make watch"
	@echo "  Watch files for changes and trigger build automatically"
	@echo ""
