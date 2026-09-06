---
name: site-map
description: Use when asked to plan or document a website's page hierarchy and navigation structure — sections, links, page hierarchy — for both user navigation/design purposes and machine-readable SEO sitemaps.
---

# Site Map

A site map is a visual representation of the hierarchical structure and
organization of a website's content — a list of all the pages and
sections of a website, organized to help users navigate and understand
the site's content.

## Typical elements

- **Sections** — the major content groupings, such as Products, Support,
  Contact, FAQ.
- **Links** — hyperlinks connecting the different sections and pages,
  making navigation possible.
- **Page hierarchy** — the structure showing how pages relate to each
  other and to the site as a whole.

Site maps can be presented as hierarchical diagrams, flowcharts, or plain
lists, and can be interactive — letting users click through sections and
pages directly from the map.

## Important functions

- **Help users navigate the site** — a clear, organized overview makes
  it easier for users to find what they're looking for.
- **Improve search engine optimization** — a machine-readable sitemap
  (typically an XML file at `/sitemap.xml`) gives search engines a
  comprehensive overview of the site's structure and content, helping
  them index and rank it more accurately.
- **Streamline website design** — planning the site map before or during
  design helps designers organize content and structure, producing a
  more user-friendly, intuitive site.

## Two audiences, two formats

A site map serves two distinct audiences with two distinct artifacts:
a human-facing site map (a visual diagram or an on-site "Sitemap" page)
helps visitors navigate, while a machine-facing XML sitemap
(`sitemap.xml`, following the sitemaps.org protocol) helps search-engine
crawlers discover and index pages — the same underlying page hierarchy,
but a different format and purpose for each.

## Common pitfalls

- **Letting the site map drift from the actual site structure** — as
  pages are added, removed, or reorganized, an unmaintained site map
  becomes actively misleading rather than helpful.
- **Confusing the human-facing and machine-facing versions** — assuming
  an XML sitemap improves visible user navigation, or that a visual
  navigation diagram helps search engine indexing, when each serves a
  different purpose.
- **Too many levels of hierarchy** — an overly deep structure makes both
  the visual map and actual site navigation harder to use; flatten where
  reasonable.
- **Omitting orphan pages** — pages that exist on the site but aren't
  linked from anywhere in the navigation structure won't appear in a
  hierarchy-based site map and can go undiscovered by users and crawlers
  alike.

## Learn more

- [sitemaps.org protocol](https://www.sitemaps.org/protocol.html) for the XML sitemap format search engines consume.
- [[mind-map]], [[flowchart]] for general-purpose diagramming techniques usable for a visual site map.
