.PHONY: all build clean generate-docs help install lint pack publish rebuild test watch

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

help:
	@echo "Manage project"
	@echo ""
	@echo "Usage:"
	@echo "  $$ make [command]"
	@echo ""
	@echo "Commands:"
	@echo ""
	@echo "  $$ make build"
	@echo "  Build project"
	@echo ""
	@echo "  $$ make clean"
	@echo "  Clean installed dependencies and artifacts"
	@echo ""
	@echo "  $$ make install"
	@echo "  Install dependencies and build project"
	@echo ""
	@echo "  $$ make lint"
	@echo "  Lint code style"
	@echo ""
	@echo "  $$ make pack"
	@echo "  Package project locally"
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
