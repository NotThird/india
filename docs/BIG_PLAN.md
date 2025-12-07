# India Trip Website - Master Plan

## Project Overview

A website for planning and documenting an upcoming India trip.

## Architecture Decisions

### ADR-001: Agent OS Integration
- **Decision**: Implemented Agent OS v2.1.1 with `default` profile
- **Context**: Spec-driven development system for structured AI-assisted development
- **Consequences**:
  - 6 slash commands available (`/plan-product`, `/shape-spec`, `/write-spec`, `/create-tasks`, `/implement-tasks`, `/orchestrate-tasks`)
  - 8 subagents for task delegation
  - 15 Claude Code Skills for automatic standards application

### ADR-002: Tech Stack
- **Decision**: *Pending `/plan-product` execution*
- **Options to consider**:
  1. Next.js (React-based, SSG/SSR)
  2. Astro (Content-focused, fast)
  3. Plain HTML/CSS/JS (Simplest)

## Standards

Agent OS provides 15 standards organized by category:

**Global**: coding-style, commenting, conventions, error-handling, tech-stack, validation
**Frontend**: accessibility, components, css, responsive
**Backend**: api, migrations, models, queries
**Testing**: test-writing

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2025-12-06 | Project initialized | Claude |
| 2025-12-06 | Agent OS v2.1.1 installed (default profile) | Claude |

---

## Open Questions

1. **Tech Stack**: Run `/plan-product` to determine framework choice
2. **Trip Details**: Dates, locations, features needed for the website
3. **Hosting**: Where will the site be deployed?
