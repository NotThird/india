# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

India Trip Website - A web application for planning and documenting an India trip.

## Agent OS Integration

This project uses Agent OS v2.1.1 (default profile) for spec-driven development.

### Available Commands

| Command | Purpose |
|---------|---------|
| `/plan-product` | Document product mission, roadmap, tech stack |
| `/shape-spec` | Research and scope a new feature |
| `/write-spec` | Transform requirements into formal specification |
| `/create-tasks` | Break spec into implementation tasks |
| `/implement-tasks` | Direct implementation with main agent |
| `/orchestrate-tasks` | Delegate to specialized subagents |
| `/improve-skills` | Optimize Skill descriptions |

### Workflow

```
ONE-TIME: /improve-skills → /plan-product

FEATURE CYCLE: /shape-spec → /write-spec → /create-tasks → /implement-tasks
```

## Development Commands

*To be defined after `/plan-product`*

## Key Directories

```
.claude/
├── commands/agent-os/   # 6 slash commands
├── agents/agent-os/     # 8 subagents
└── skills/              # 15 Claude Code Skills

agent-os/
├── config.yml           # Project config
├── standards/           # Reference standards
├── product/             # Mission, roadmap, tech-stack (created by /plan-product)
└── specs/               # Feature specs (created by workflow)
```
