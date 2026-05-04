# Linked Testruns Test Project

Minimal Playwright project for verifying [#8375 — Linked Testruns: Write message for automated testruns without links](https://github.com/testomatio/testomatio/issues/8375).

## Structure

- `tests/linked.spec.ts` — 2 tests WITH `@T` tags (linked to manual test cases)
- `tests/unlinked.spec.ts` — 2 tests WITHOUT `@T` tags
- `tests/only-unlinked.spec.ts` — 2 tests WITHOUT `@T` tags (edge case: no links at all)

## Usage

```bash
npm install

# Report all tests (linked + unlinked) into an existing Manual Run
TESTOMATIO=<api_key> TESTOMATIO_RUN=<run_uid> TESTOMATIO_CREATE=1 \
npx playwright test tests/linked.spec.ts tests/unlinked.spec.ts

# Report only unlinked tests (edge case)
TESTOMATIO=<api_key> TESTOMATIO_RUN=<run_uid> TESTOMATIO_CREATE=1 \
npx playwright test tests/only-unlinked.spec.ts tests/unlinked.spec.ts
```

**Note:** `@T` tag IDs in `linked.spec.ts` must match real test IDs in the target project. Update them before running against a different project.
