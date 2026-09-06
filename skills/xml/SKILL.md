---
name: xml
description: Use when asked to write, parse, or validate XML — element/attribute syntax, namespaces, XPath queries, or schema validation with XSD/DTD — independent of any specific XML-based format (SVG, RSS, config files) built on top of it.
---

# XML

XML (Extensible Markup Language) is a strict, self-describing markup format:
every element must be properly nested and closed, unlike HTML's browsers
which silently repair malformed markup. A well-formed XML document fails
outright — a parse error, not a best-effort render — if the syntax is wrong.

## Syntax basics

```xml
<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101" available="true">
    <title>XML Developer's Guide</title>
    <price currency="USD">44.95</price>
    <description><![CDATA[Raw text with <angle brackets> & symbols, unescaped]]></description>
  </book>
  <!-- a comment -->
  <empty-element/>
</catalog>
```

- Every opening tag needs a matching closing tag, or a self-closing `/>` —
  there is no browser-style error recovery.
- Attribute values must be quoted, and there can be only one root element per
  document.
- Literal `<`, `>`, `&` in text content must be escaped (`&lt;`, `&gt;`,
  `&amp;`) unless wrapped in a `<![CDATA[ ... ]]>` section, which passes its
  contents through verbatim (except the literal string `]]>`).
- `<?xml version="1.0" encoding="UTF-8"?>` is the optional-but-conventional
  declaration; if present it must be the very first thing in the document.

## Namespaces

```xml
<root xmlns="http://example.com/default"
      xmlns:h="http://example.com/html">
  <h:table>
    <h:tr><h:td>Cell</h:td></h:tr>
  </h:table>
</root>
```

`xmlns` declares a default namespace for unprefixed elements in that scope
and its descendants; `xmlns:prefix="uri"` declares a prefixed one. The prefix
itself is arbitrary — what identifies the namespace is the URI, not the
prefix string — so `h:table` and `foo:table` refer to the same element if
both prefixes are bound to the same URI. This is why two documents using
different prefixes for the same namespace are still compatible, and why
comparing prefixes textually instead of resolving them is a common parsing
bug.

## XPath

```
/catalog/book                     select every <book> under the root
/catalog/book[@id='bk101']        select the book with that id attribute
//title                           select every <title> at any depth
/catalog/book[price > 40]/title   select titles of books priced over 40
//book/@available                 select the `available` attribute nodes
```

XPath addresses nodes in an XML document by path, similar in spirit to a
filesystem path or a CSS selector — `/` for an absolute path from the root,
`//` for "anywhere in the document," `[...]` for a predicate filter,
`@name` for an attribute.

## Schema validation: DTD vs XSD

```xml
<!-- DTD: older, simpler, no type system -->
<!DOCTYPE catalog [
  <!ELEMENT catalog (book+)>
  <!ELEMENT book (title, price)>
  <!ATTLIST book id CDATA #REQUIRED>
]>
```

```xml
<!-- XSD: modern, supports data types, is itself well-formed XML -->
<xs:element name="price">
  <xs:simpleType>
    <xs:restriction base="xs:decimal">
      <xs:minInclusive value="0"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

A document that merely parses without error is **well-formed**; a document
that additionally conforms to a DTD or XSD is **valid** against that schema.
XSD is generally preferred for new work — it supports real data types
(`xs:decimal`, `xs:date`, …), namespace-aware validation, and is itself
written in XML, unlike DTD's separate, more limited syntax.

## Common pitfalls

- **Un-escaped `&` or `<` in text content** — the single most common
  well-formedness error; either escape the character or wrap the content in
  `CDATA`.
- **Treating XML as case-insensitive** — element and attribute names are
  case-sensitive; `<Title>` and `<title>` are different elements.
- **Ignoring namespace resolution** when querying or comparing elements —
  matching on the local name alone (`title`) while ignoring which namespace
  it's in can silently match the wrong element in a multi-namespace
  document.
- **XXE (XML External Entity) injection** — a naively configured parser that
  resolves external entities can be tricked into reading local files or
  making network requests from a malicious document. Disable external entity
  resolution and DTD processing in any parser handling untrusted XML input.
- **Assuming attribute vs. element choice doesn't matter** — there's no hard
  rule, but attributes suit single-valued metadata about an element (an id,
  a flag), elements suit structured or repeatable content; picking
  inconsistently makes a schema harder to query and validate.

## Learn more

- [W3C XML 1.0 spec](https://www.w3.org/TR/xml/)
- [MDN: XPath](https://developer.mozilla.org/en-US/docs/Web/XPath)
- [W3C XML Schema (XSD) primer](https://www.w3.org/TR/xmlschema-0/)
- [OWASP: XXE Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html)
