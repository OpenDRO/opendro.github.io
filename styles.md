---
layout: docs
title: intro docs
---
# Headings

Like the H1 above or the other levels below...

## h2 Heading           {#id_h2}
### h3 Heading          {#id_h3}
#### h4 Heading         {#id_h4}
##### h5 Heading        {#id_h5}
###### h6 Heading       {#id_h6}

# Paragraphs

A simple and straightforward paragraph with some blahblah

This para line starts at the first column. However,
   indenting the next line which has no affect.
   and only helps if you are trying to organize your thoughts.
Maybe for each sentance you want a different justification for some reason
And you can also just continue on the next line. None of this makes a difference in how the paragraph is displayed.

Soft line breaks can more explicit by using the double \\
backslash. So it breaks differently, but as soon as \\
this is done without the double backslash
it is just a continuation with no carriage return

Make sure the lines above and below your paragraph are empty.


# Horizontal Rules

* * *

---

  _  _  _  _

---------------
# Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

^

# Blockquotes

> A block quote
> with another line

> a block quote
> > within another block qoate
> > > within yet another block quote
> > back to another block quote

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


# Lists

## Unordered

### Various

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

### Complex

*   This is just text.
    * this is a sub list item
      * this is a sub sub list item
* This is just text,
    spanning two lines
  * this is a nested list item.

### Adding a class to a list

* {:.cls} This item has the class "cls".
  Here continues the above paragraph.

* This is a normal list item.

## Ordered

### Basic

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

### Sequential

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

### Start numbering with offset:

57. foo
1. bar

## Bypass a list


1984\. It was great
\- others say that, too!

# Tables

## Standard

|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|

## Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Complex

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| First body part | Second cell | Third cell | fourth cell
| Second line |foo | **strong** | baz
| Third line |quux | baz | bar
|---
| Second body
| 2 line
|===
| Footer row


# Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

# Math (LaTEX)

## Simple

When $$a \ne 0$$, there are two solutions to $$ax^2 + bx + c = 0$$ and they are:

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$


## Complex

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$


# Code

Inline `code`

## Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


## Fenced code

```
Sample text here...
```

## Fenced code with code highlighting

__javascript__
``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
__ruby__
~~~ ruby
def what?
  42
end
~~~

__c__
~~~ C
int v = 0;
for(int i = 0; i < 10; i++) {
    v = v + i;
}
~~~

__arduino__
~~~ arduino
int v = 0;
for(int i = 0; i < 10; i++) {
    v = v + i;
}
~~~

# Images

Here is an inline image ![Minion](https://octodex.github.com/images/minion.png){: height="36px" width="36px"}

Or a reduced sized image based on a referenced image size:

![Stormtroopocat]

Or a referenced image ![dojocat]{: height="100px" width="100px"} with an explicit size and another reference at a difference explicit size ![dojocat]{: height="124px" width="124px"}

The next reference seems to reuse the previously defined explicit size even though the reference has a different size:

![dojocat]

[dojocat]: https://octodex.github.com/images/dojocat.jpg
{: height="300px" width="300px"}

[Stormtroopocat]: https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat"
{: height="136px" width="136px"}


# Using footnotes

This is some text. [^1]

Other text. [^footnote]

# Notes
{:success: .alert .alert-success}
{:warning: .alert .alert-warning}
{:info:    .alert .alert-info}
{:danger:  .alert .alert-danger}

## Success

using direct html...

<div class="alert alert-success">
You must replace `meowmeowmeow` with your personal API key.
</div>

or using paragraph attribution...

You must replace `meowmeowmeow` with your personal API key.
{:success}

## Warning

using direct html...

<div class="alert alert-warning">
You must replace `meowmeowmeow` with your personal API key.
</div>

or using paragraph attribution...

You must replace `meowmeowmeow` with your personal API key.
{:warning}

## Info

using direct html...

<div class="alert alert-info">
You must replace `meowmeowmeow` with your personal API key.
</div>

or using paragraph attribution...

You must replace `meowmeowmeow` with your personal API key.
{:info}

## Danger

using direct html...

<div class="alert alert-danger">
You must replace `meowmeowmeow` with your personal API key.
</div>

or using paragraph attribution...

You must replace `meowmeowmeow` with your personal API key.
{:danger}

# Typographic replacements

`---` will become an em-dash (like this —)

`--` will become an en-dash (like this –)

`...` will become an ellipsis (like this …)

`<<` will become a left guillemet (like this «) – an optional following space will become a non-breakable space

`>>` will become a right guillemet (like this ») – an optional leading space will become a non-breakable space

"Smartypants, double quotes" and 'single quotes' which is in different HTML and about some blahblah

# adding spans, classes & ids

This *is*{:.underline} some `code`{:#id}{:.class}.

A [link](test.html){:rel='something'} and some **tools**{:.tools}.


# Definitions

## Basic

blahblah
: A Markdown-superset converter

HTML
: Another Markdown-superset converter

## with all sorts of ids

{:#term} Term with id="term"
: {:.cls} Definition with class "cls"

{:#term1} First term
{:#term2} Second term
: {:.cls} Definition

## inline definitions

Some other kind of common paragraphs where there are words that might not be clear to folks,
such as linkid and about some "blahblah"

*[blahblah]:yada-yada-yada

*[linkid]: http://www.example.com/ "Optional Title"

# Referenced footnotes

[^1]: Some *crazy* footnote definition.

[^footnote]:
    > Blockquotes can be in a footnote.

        as well as code blocks

    or, naturally, simple paragraphs.

    and even a note
    {:info}