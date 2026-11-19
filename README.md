# Toka Alokda — website, no exhibit (v19)

This package reproduces the **image-backed hero header, rounded navigation tabs, page spacing, and light/dark toggle** of the full interactive offline HTML version. It deliberately excludes the non-Gaussian-universe exhibit and nav link.

- **Light mode is the default** for new visitors. A visitor can enable dark mode and the preference is saved.
- The header and nav are shared across all pages using `_layouts/default.html`.
- Pages: Home, Research, Publications, CV, Trivia.
- The ZIP is Jekyll source for GitHub Pages. Extract and upload **the contents** to the root of your `tokaalokda.github.io` repository.
- If an exhibit folder already exists in the repository, delete `non-gaussian-universe/` when publishing this interim version; GitHub does not delete files just because they are absent from a ZIP upload.
- For an immediately clickable local preview without Jekyll, use `tokaalokda_matching_design_no_exhibit_v19_2026.html`. It has the same hero and tabs but uses a single-page tab router.
