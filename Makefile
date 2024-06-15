install:
  npm ci

make lint:
  npx eslint .

lint-fix:
  npx eslint . --fix