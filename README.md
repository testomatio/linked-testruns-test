# Linked Testruns Test Project

Minimal Playwright project for verifying Linked Testruns message behavior.

## Setup

```bash
npm install
```

## Report into a Manual Run

Create a Manual Run in Testomat.io UI first, then report tests into it. Replace `TESTOMATIO` with your project's reporter API key and `TESTOMATIO_RUN` with the run UID.

```bash
# Linked + unlinked tests
TESTOMATIO=tstmt_xxx TESTOMATIO_RUN=<run_uid> TESTOMATIO_CREATE=1 \
npx playwright test tests/linked.spec.ts tests/unlinked.spec.ts

# Only unlinked tests (edge case)
TESTOMATIO=tstmt_xxx TESTOMATIO_RUN=<run_uid> TESTOMATIO_CREATE=1 \
npx playwright test tests/only-unlinked.spec.ts tests/unlinked.spec.ts
```

`@T` tag IDs in `linked.spec.ts` must match real test IDs in the target project.
