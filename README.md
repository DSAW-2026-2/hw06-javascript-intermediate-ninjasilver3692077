# Name

Juan Esteban Gonzalez Villarreal

# Pages link

https://dsaw-2026-2.github.io/hw06-javascript-intermediate-ninjasilver3692077/#ranking

# HW06 — JavaScript Intermediate

**Week 6 · DSAW · Universidad de La Sabana**

## Objective

Demonstrate command of modern array methods by building a filterable list UI over a real dataset.

## Deliverables

### Dataset

Create a dataset of **at least 20 items** with **at least 3 properties** relevant to your project.
Examples: a list of posts with `{ title, category, date, author }`, inventory with `{ name, type, price, available }`.

Store it as a JS object or importable file — not hardcoded as HTML.

### Filterable UI (`index.html`)

- Real-time search that filters as the user types
- Filters by at least 3 different properties (dropdowns, checkboxes, or whatever fits)
- Results update without reloading the page

**Code requirements:**
- `map`, `filter`, and `reduce` must each appear at least once
- No `for` loops where an array method would work better
- ES6+: `const`/`let`, arrow functions, destructuring, template literals

### `REFLECTION.md`

Explain specifically why you used `reduce` instead of `forEach` for **one concrete operation** you implemented. Show the code for both versions and argue which is clearer and why.

## Layer 2

Add a stats panel computed with `reduce`: total item count, average of a numeric value, or a count grouped by category.

## AI Log (`AI-LOG.md`)

- Did you ask AI to write the `reduce`? If yes, could you explain afterwards how it works?
- Which array method was hardest to understand?

## Deployment

GitHub Pages.

## Autograding

The pipeline will check:
- ✅ `index.html`, `REFLECTION.md` are present
- ✅ ESLint passes with no errors
- ✅ GitHub Pages responds
- ✅ map/filter/reduce usage, real-time search, 3 filters, technical reflection (reviewed by Claude)

> **Submission rule:** If it is not deployed and public, it cannot be graded.
