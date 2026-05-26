# Skill Playbook

## Installed Skills

The project now has these user-level Codex skills installed:

- `playwright`: browser automation, snapshots, screenshots and UI-flow checks.
- `screenshot`: desktop or app screenshot capture when browser-native capture is not enough.
- `security-best-practices`: security and privacy review for JavaScript/frontend code.
- `netlify-deploy`: optional deployment workflow for Netlify.

Restart Codex after installation so new skills are loaded automatically.

## How To Use Them Here

### Playwright

Use after any visual or interaction change.

Checklist:

- Open the local site through `python3 -m http.server 4173`.
- Verify desktop width around `1280x720`.
- Verify mobile width around `390x844`.
- Check no horizontal overflow.
- Check the mobile menu opens and closes.
- Check project filters update visible cards.
- Check footer contact and social links are present.

### Screenshot

Use only when a normal browser screenshot is unavailable or when a full desktop/window capture is explicitly needed.

Recommended output location for temporary QA captures:

```text
/private/tmp
```

### Security Best Practices

Use when changing:

- contact forms
- external links
- user-provided content
- JavaScript behavior
- personal data shown on the page

Current privacy note:

- The footer includes a full street address. This is acceptable only if intentionally public. A safer public version is `Girona, Espana`.

External link checklist:

- Use clear accessible labels.
- Prefer HTTPS links.
- Consider `target="_blank"` plus `rel="noopener noreferrer"` only if opening new tabs is desired.

### Netlify Deploy

Use if the site should be published on Netlify.

Suggested settings for this static site:

- Build command: none.
- Publish directory: project root.
- Production deploy only after local QA passes.

The project is already hosted in GitHub as source control. Netlify is optional, not required for normal updates.

## Missing Skills Worth Considering Later

The curated skill list did not include dedicated SEO, accessibility, or long-term memory skills by those exact names. For now this repo uses documentation as project memory:

- `AGENTS.md`: concise operating context for future Codex sessions.
- `docs/portfolio-plan.md`: product and maintenance guidance.
- `docs/skill-playbook.md`: QA and deployment workflow.

If an external memory skill such as `megamemory` becomes available, use it only for non-sensitive project knowledge. Do not store private contact data, tokens, or credentials in external memory.

## Pre-Publish Checklist

- Desktop visual check passes.
- Mobile visual check passes.
- No horizontal overflow.
- All images load.
- All links point to intended destinations.
- Footer contact details are intentional.
- `git status -sb` is clean after commit and push.
