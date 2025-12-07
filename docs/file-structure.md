# File Structure

```
india-trip-website/
├── .claude/
│   ├── commands/agent-os/       # 6 Agent OS commands
│   │   ├── create-tasks.md
│   │   ├── implement-tasks.md
│   │   ├── improve-skills.md
│   │   ├── orchestrate-tasks.md
│   │   ├── plan-product.md
│   │   ├── shape-spec.md
│   │   └── write-spec.md
│   ├── agents/agent-os/         # 8 specialized subagents
│   │   ├── implementation-verifier.md
│   │   ├── implementer.md
│   │   ├── product-planner.md
│   │   ├── spec-initializer.md
│   │   ├── spec-shaper.md
│   │   ├── spec-verifier.md
│   │   ├── spec-writer.md
│   │   └── tasks-list-creator.md
│   └── skills/                  # 15 Claude Code Skills
│       ├── backend-api/
│       ├── backend-migrations/
│       ├── backend-models/
│       ├── backend-queries/
│       ├── frontend-accessibility/
│       ├── frontend-components/
│       ├── frontend-css/
│       ├── frontend-responsive/
│       ├── global-coding-style/
│       ├── global-commenting/
│       ├── global-conventions/
│       ├── global-error-handling/
│       ├── global-tech-stack/
│       ├── global-validation/
│       └── testing-test-writing/
├── agent-os/
│   ├── config.yml               # Agent OS project config
│   ├── standards/               # Development standards
│   │   ├── backend/
│   │   ├── frontend/
│   │   ├── global/
│   │   └── testing/
│   ├── product/                 # Created by /plan-product
│   └── specs/                   # Feature specifications
├── docs/
│   ├── BIG_PLAN.md              # Master plan
│   └── file-structure.md        # This file
├── src/                         # Source code (to be created)
├── CHANGELOG.md
├── CLAUDE.md
└── README.md
```

*Structure will expand as development progresses*
