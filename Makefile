install:
	npm ci

brain-games:
	node bin/brain-games

publish:
	npm publish --dry-run

make lint:
	npx eslint .