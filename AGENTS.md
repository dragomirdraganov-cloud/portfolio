# Portfolio Agent Notes

## Project Shape

This is a static portfolio website for Dragomir Draganov Karlova. It uses plain HTML, CSS, JavaScript and SVG assets. There is no package manager, build step, framework, or generated output.

## Core Files

- `index.html`: page content, sections, links, project cards, contact details.
- `styles.css`: responsive layout, visual system, footer, cards, filters.
- `script.js`: mobile navigation and project filtering.
- `assets/`: SVG mockups and favicon.
- `docs/portfolio-plan.md`: maintenance guidance.
- `docs/skill-playbook.md`: QA, security, deployment, and skill workflow.

## Workflow

Before changing UI, inspect `index.html` and `styles.css`. Keep changes small and consistent with the existing static style. Avoid adding dependencies unless the user explicitly asks for a framework or build process.

After UI changes, run a local static server:

```bash
python3 -m http.server 4173
```

Then verify desktop and mobile with browser tooling. Check that there is no horizontal overflow, nav works, images load, filters work, and footer links are correct.

## Content Guardrails

The footer currently contains public contact details, including a full street address. If privacy or security comes up, recommend reducing the location to `Girona, Espana`.

Use only verified public information for experience claims. Do not invent job dates, titles, clients, or metrics.

## Useful Installed Skills

- `playwright`: browser automation and UI-flow QA.
- `screenshot`: OS-level screenshot fallback.
- `security-best-practices`: security/privacy review for JavaScript/frontend work.
- `netlify-deploy`: optional static deploy workflow if the user wants Netlify hosting.

Restart Codex after installing or updating skills so they are available automatically.
