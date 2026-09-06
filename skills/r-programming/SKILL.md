---
name: r-programming
description: Use when asked to write, explain, or debug general-purpose R code — vectors and vectorization, data frames, the tidyverse/base-R split, functions — for statistical computing and data analysis, distinct from julia-programming's numerical-computing focus.
---

# R Programming

Covers R, a language purpose-built for statistical computing and data
analysis — vectorized by default, with data frames as a first-class
citizen. See [[julia-programming]] for a language with an overlapping
scientific-computing audience but a different design center (general
numerical performance rather than statistics specifically).

## Vectors and vectorization

```r
x <- c(1, 2, 3, 4, 5)
y <- x * 2                  # applied element-wise, no explicit loop
z <- x[x > 2]                # logical indexing: subset where condition is true

mean(x)                      # 3
sum(x > 2)                    # 3 — TRUE coerces to 1 when summed
```

R operations are vectorized by default — `x * 2` applies to every
element without an explicit loop, and this is both idiomatic and
significantly faster than an equivalent `for` loop over elements, since
vectorized operations run in optimized, often C-level, code underneath.

## Data frames

```r
df <- data.frame(
    name = c("Ada", "Grace", "Alan"),
    age = c(36, 85, 41)
)

df[df$age > 40, ]            # base R: rows where age > 40

library(dplyr)
df |> filter(age > 40) |> select(name)   # tidyverse equivalent, piped
```

A data frame is a table — columns can hold different types, rows are
observations — the central data structure for R's statistical and
data-analysis work, roughly analogous to a table in
[[google-sheets]]/[[microsoft-excel]] or a pandas DataFrame in
[[python-programming]].

## Base R vs. the tidyverse

R code commonly comes in one of two idiomatic styles: base R (using
built-in indexing and functions like the examples above) or the
tidyverse (a popular collection of packages — `dplyr`, `ggplot2`,
`tidyr`, and others — favoring a consistent, pipeable (`|>` or `%>%`)
grammar). Neither is strictly "correct"; codebases and teams often settle
on one, and switching between them without noticing can produce
confusing, inconsistent code.

## Functions

```r
summarize_scores <- function(scores, threshold = 50) {
    list(
        mean = mean(scores),
        passing = sum(scores >= threshold)
    )
}

summarize_scores(c(45, 67, 89, 32))
```

Functions are first-class values, support default argument values, and
(as in most of R) operate naturally over vector arguments without extra
code.

## Common pitfalls

- **1-based indexing surprise** coming from a 0-based-indexing language —
  `x[1]` is the first element in R, not the second.
- **Silent recycling** — an operation between vectors of different
  lengths recycles the shorter one rather than erroring, which can
  silently produce wrong results if the length mismatch was unintentional.
- **`NA` propagation** — most functions return `NA` when any input is
  `NA` unless told otherwise (`na.rm = TRUE` for many aggregate
  functions); forgetting this silently produces `NA` results.
- **Mixing base R and tidyverse idioms inconsistently** within the same
  codebase, rather than picking one style deliberately.

## Learn more

- [R documentation](https://www.r-project.org/other-docs.html)
- [R for Data Science](https://r4ds.hadley.nz/) (tidyverse-oriented)
- [[julia-programming]] for an alternative scientific-computing language with a different performance/design focus.
- [[statistical-analysis]] for the statistical techniques R is commonly used to apply.
