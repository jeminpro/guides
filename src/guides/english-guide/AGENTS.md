# English Mastery

A4 cheat sheets for Primary & 11+ English. Four sections, each opened by a divider page. Topic sheets follow the divider for that section. The first punctuation sheet is the hexagon map of the marks to cover. Capital letters, sentence endings, commas, apostrophes, speech marks, colons and semicolons, dashes, brackets, hyphens, and ellipsis follow the punctuation map. Each topic uses the header title “Understanding Punctuations - …” and a content heading of the topic name. A new topic starts with “- When to use” (sentence endings keep “What are they?”). Common traps stay in one box. Grammar opens with a Quick Summary table (Concept, What to Practise, Example), continued across sheets at the same type size. Header title: “Understanding Grammar - Quick Summary”. Parts of speech follow, each with its own header “Understanding Grammar - …”. Conjunctions keep the detailed coordinating and subordinating teaching. Prepositions and determiners include the extra at/on/in and article guidance. Tips and traps stay with the part of speech they belong to. Sentence structure and clauses come next. Noun phrases then have their own sheets: what they are, adjectives and noun modifiers, expansion, and choosing detail, including the common mistakes. Verb tenses and direct and reported speech are separate grammar topics. Subject–verb agreement follows them: match the verb to the head noun, then cover joined subjects, groups and titles. Noun and pronoun agreement comes next: the pronoun matches its antecedent in number and person, including indefinite pronouns, groups and unclear reference. Adverbs and modality follow, then connecting ideas of time, place and cause. Irregular verbs come next: past beside past participle, the repeated patterns, a twenty-five-verb list, and the have/has/had mistakes. Do not print practice tests, cloze drills, answer keys, mastery checklists or mixed assessments from supplied notes. Do not reprint the full parts-of-speech catalogue there; use those jobs inside whole sentences.

1. Comprehension and Language Techniques
2. Punctuation
3. Grammar and Sentence Structure
4. Vocabulary

Divider pages share one banner style. Only the fill colour changes (`tone-comprehension`, `tone-punctuation`, `tone-grammar`, `tone-vocabulary`).

## Layout

- Route: `src/pages/english-guide/index.astro`
- Meta: `meta.ts` (page list, guide id/title)
- Shell: `GuidePageShell.astro` (brand header, footer `n / PAGE_COUNT`)
- Divider: `SectionDivider.astro`
- Sheets: `Sheets.astro` imports `pages/Page01.astro` onward
- Styles: `styles/guide.css`

## Constraints

- Update `PAGE_COUNT` and the sheet imports when adding pages.
- Keep later topic sheets after the divider for that section.
- Do not shrink text to fix overflow — tighten spacing or content instead.
- Do not import other guides’ files.
- Verify: `npm run check:layout -- --guide=english-guide`
