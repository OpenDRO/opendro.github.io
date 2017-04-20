---
layout: docs
title: styleguide
---
This is a kramdown syntax style guide.

# Level 1 Header    {#id_h1}
## Level 2 Header   {#id_h2}
### Level 3 Header  {#id_h3}
#### Level 4 Header {#id_h4}

# Blockquotes

> A block quote
> with another line

> a block quote
> > within another block qoate
> > > within yet another block quote
> > back to another block quote

# Paragraphs

A simple and straightforward paragraph

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

### Code Samples


  ~~~ shell
    This is a cURL/shell code example, only shown when the cURL tab is active!
  ~~~

  ``` javascript
    function myJavascript(is_active) {
        if(is_active) {
            console.log("I am active.");
        } else {
            console.log("I am not active.");
        }
  ```

  ~~~ nodejs
    This is a Node.js code example, only shown when the Node.js tab is active!
  ~~~

  ~~~ shell-always
    This is a shell examples, shown regardless of what tab is active.
  ~~~

  ~~~ json
    JSON code examples, always shown since their is no JSON language tab.
  ~~~
</code>
</pre>

Code samples will appear in the dark area to the right of the main text. When possible position code samples right under headers in a markdown file.

### Language Specific Content

To create content sections(non-code example), you can do this by wrapping the content in a `div` with the class `lang-content`. Then add the language names to the div that you want to the content to be active for.

```
  <div class="lang-content javascript nodejs">
     This content only shows up when the `javascript` or `nodejs` tab is active.
  <div>

  <div class="lang-content shell">
     This content only shows up when the `shell` tab is active.
  <div>
```
### Code Annotations

For code annotations:

    > This is a code annotation. It will appear in the area to the right, next to the code samples.

Code annotations are essentially the same thing as paragraphs, but they'll appear in the area to the right along with your code samples.

### Tables

```markdown
Table Header 1 | Table Header 2 | Table Header 3
-------------- | -------------- | --------------
Row 1 col 1 | Row 1 col 2 | Row 1 col 3
Row 2 col 1 | Row 2 col 2 | Row 2 col 3
```

Note that the pipes do not need to line up with each other on each line.


### Formatted Text

    This text is **bold**, this is *italic*, this is an `inline code block`.

You can use those formatting rules in code annotations, tables, paragraphs, lists, wherever.

### Lists

    1. This
    2. Is
    3. An
    4. Ordered
    5. List

    * This
    * Is
    * A
    * Bullet
    * List

### Links

    This is an [internal link](#error-code-definitions), this is an [external link](http://google.com).

### Notes and Warnings

You can add little highlighted warnings and notes with just a little HTML embedded in your markdown document:

    <aside class="notice">
    You must replace `meowmeowmeow` with your personal API key.
    </aside>

Use `class="notice"` for blue notes, `class="warning"` for red warnings, and `class="success"` for green notes.

### Need Help?

If you have trouble with any of the syntax, or if it's confusing, let us know by filing an issue. Thanks!