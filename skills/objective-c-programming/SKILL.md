---
name: objective-c-programming
description: Use when asked to write, explain, or debug general-purpose Objective-C code — message-passing syntax, properties and ARC, protocols, interop with C — as the predecessor language swift-programming largely supersedes on Apple platforms.
---

# Objective-C Programming

Covers Objective-C — a strict superset of C adding Smalltalk-style
message passing and object-orientation, historically Apple's primary
application language and now largely superseded by
[[swift-programming]] for new code, though still common in legacy
codebases and low-level system frameworks.

## Message-passing syntax

```objectivec
@interface Greeter : NSObject
- (void)greet:(NSString *)name;
@end

@implementation Greeter
- (void)greet:(NSString *)name {
    NSLog(@"Hello, %@!", name);
}
@end

Greeter *greeter = [[Greeter alloc] init];
[greeter greet:@"World"];   // "sending a message", not a conventional method call
```

Objective-C's square-bracket syntax sends a message to an object rather
than calling a method directly — at runtime, the object (or `nil`,
harmlessly) decides how to respond. This dynamic dispatch is more
flexible (and slower) than C++/Swift's typically static dispatch, and
underlies features like method swizzling and dynamic proxy objects.

## Properties and ARC

```objectivec
@interface Person : NSObject
@property (nonatomic, strong) NSString *name;
@property (nonatomic, weak) Person *mentor;   // weak avoids a retain cycle
@end
```

`@property` generates accessor methods and manages memory automatically
under Automatic Reference Counting (ARC) — the compiler inserts
retain/release calls at compile time, eliminating most manual memory
management. `strong` references keep an object alive; `weak` references
don't, and are used specifically to break potential retain cycles
(two objects strongly referencing each other, which ARC alone can't
collect).

## Protocols

```objectivec
@protocol Shape
- (double)area;
@end

@interface Circle : NSObject <Shape>
@property (nonatomic) double radius;
@end

@implementation Circle
- (double)area { return M_PI * self.radius * self.radius; }
@end
```

A `@protocol` defines a contract a class can conform to (`<Shape>`),
Objective-C's equivalent of an interface — Swift's protocols and much of
its protocol-oriented design descend directly from this.

## Interop with C

Because Objective-C is a strict superset of C, plain C code, structs, and
functions can be used directly inside Objective-C files with no wrapper
needed — this is exactly why performance-critical or hardware-adjacent
Apple-platform code often mixes C and Objective-C freely.

## Common pitfalls

- **Retain cycles** — two objects holding `strong` references to each
  other leak memory under ARC, which (unlike a tracing garbage collector)
  cannot detect and break reference cycles on its own; use `weak` or
  `unsafe_unretained` for back-references.
- **Sending a message to `nil`** — unlike a null-pointer dereference in
  C, sending a message to a `nil` object silently does nothing and
  returns a zero-equivalent value, which can mask real bugs.
- **Manual memory management leftovers in mixed-era codebases** — code
  predating ARC (using manual `retain`/`release`) doesn't mix safely with
  ARC-managed code without explicit bridging.
- **Assuming interop with Swift is automatic in both directions** —
  Objective-C code needs a bridging header to be visible from Swift, and
  not every Swift feature (generics with associated types, for instance)
  is exposable back to Objective-C.

## Learn more

- [Apple's Objective-C documentation](https://developer.apple.com/documentation/objectivec)
- [[swift-programming]] for the modern language now recommended for new Apple-platform code.
- [[c-programming]] for the base language Objective-C strictly extends.
