# Claude Code Configuration

This directory contains configuration and documentation to help Claude Code work effectively with this project.

## 📁 Directory Structure

```
.claude/
├── README.md                    # This file
├── settings.local.json          # Project-specific permissions
├── CLAUDE.md                    # Main project guidance (in root)
├── instructions.md              # Always-follow guidelines
├── architecture.md              # Technical architecture documentation
├── patterns.md                  # Reusable code patterns
├── context.md                   # Session tracking and progress
├── dependencies.md              # Dependency documentation
├── commit-templates.md          # Git commit message templates
├── mcp-setup.md                 # MCP server setup guide
└── commands/
    ├── test.md                  # /test slash command
    ├── deploy-check.md          # /deploy-check slash command
    └── new-page.md              # /new-page slash command
```

## 🚀 Quick Start

### For Claude Code Users

1. **Slash Commands** are available:
   - `/test` - Run comprehensive development tests
   - `/deploy-check` - Pre-deployment validation
   - `/new-page` - Guided page addition

2. **Key Documentation**:
   - Read `CLAUDE.md` in root for project overview
   - Check `architecture.md` for technical details
   - Use `patterns.md` for code examples

3. **When Adding Features**:
   - Follow `instructions.md` guidelines
   - Use `patterns.md` code templates
   - Reference `commit-templates.md` for commits

### For Developers

1. **Setup**:
   - Install recommended VSCode extensions (`.vscode/extensions.json`)
   - Review `mcp-setup.md` for MCP server installation
   - Check `dependencies.md` before updating packages

2. **Testing**:
   - Use `tests/checklist.md` for manual testing
   - Run `/test` for guided testing
   - Run `/deploy-check` before deployment

3. **Development**:
   - Follow patterns in `patterns.md`
   - Reference architecture in `architecture.md`
   - Update `context.md` as project evolves

## 📋 File Descriptions

### settings.local.json
Project-specific Claude Code permissions. Controls which bash commands Claude can run without asking.

### instructions.md
Guidelines Claude should always follow when working on this project. Includes:
- Animation guidelines
- Component standards
- Testing requirements
- Code style preferences

### architecture.md
Comprehensive technical documentation covering:
- State management flow
- Navigation system architecture
- Animation pipeline
- Component hierarchy
- Performance considerations

### patterns.md
Reusable code patterns and examples:
- Page component templates
- Framer Motion variants
- Navigation patterns
- Responsive design patterns
- TypeScript patterns

### context.md
Session tracking and project status:
- Current focus areas
- Completed features
- Known issues
- Next priorities
- Development notes

### dependencies.md
Detailed dependency documentation:
- Purpose of each dependency
- Update caution levels
- Usage examples
- Version notes

### commit-templates.md
Git commit message templates and examples:
- Conventional commit format
- Examples for different types
- Best practices
- Quick reference

### mcp-setup.md
Guide for setting up MCP (Model Context Protocol) servers:
- Recommended servers for this project
- Installation instructions
- Configuration guide
- Usage examples

## 🔧 Slash Commands

### /test
Runs comprehensive development testing:
- TypeScript validation
- Page transition tests
- Flame animation tests
- Mobile responsiveness
- Code quality checks
- Performance verification

### /deploy-check
Pre-deployment validation:
- Build validation
- Route testing
- Browser compatibility
- SEO validation
- Performance audit
- Accessibility checks

### /new-page
Guided page addition:
- Walks through 5-step process
- Creates component file
- Updates all required files
- Adds to navigation
- Configures routing

## 🎯 Best Practices

### When Starting a New Session
1. Review `context.md` for current status
2. Check recent commits in git history
3. Run `/test` to verify everything works

### When Adding Features
1. Follow the patterns in `patterns.md`
2. Reference `architecture.md` for structure
3. Use `instructions.md` guidelines
4. Test on mobile and desktop

### When Making Commits
1. Use templates from `commit-templates.md`
2. Follow conventional commit format
3. Be specific and descriptive
4. Explain the "why", not just "what"

### Before Deploying
1. Run `/deploy-check`
2. Complete `tests/checklist.md`
3. Verify build succeeds
4. Test in production mode

## 📚 Additional Resources

### Project-Specific
- Main README: `../README.md`
- Implementation history: `../IMPLEMENTATION_SUMMARY.md`
- Package info: `../package.json`
- TypeScript config: `../tsconfig.json`

### External
- Next.js Docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS 4: https://tailwindcss.com/docs
- React 19: https://react.dev

## 🔄 Keeping Documentation Updated

This documentation should evolve with the project:

### Update `context.md` when:
- Completing major features
- Finding/fixing issues
- Changing focus areas
- Reaching milestones

### Update `architecture.md` when:
- Changing navigation system
- Modifying state management
- Updating component structure
- Refactoring major features

### Update `patterns.md` when:
- Creating new reusable patterns
- Finding better approaches
- Adding new component types
- Establishing new conventions

### Update `dependencies.md` when:
- Adding new dependencies
- Updating major versions
- Removing dependencies
- Changing usage patterns

## 💡 Tips for Claude Code

### For Best Results
1. Always read `CLAUDE.md` in root first
2. Reference `architecture.md` when touching core systems
3. Use `patterns.md` for consistent code style
4. Check `context.md` for current project status
5. Follow `instructions.md` guidelines strictly

### Common Tasks
- **Adding a page**: Use `/new-page` command
- **Testing changes**: Use `/test` command
- **Pre-deployment**: Use `/deploy-check` command
- **Finding patterns**: Check `patterns.md`
- **Understanding architecture**: Read `architecture.md`

### Performance Tips
- Use Task tool for open-ended searches
- Read files in parallel when possible
- Reference documentation instead of searching
- Use patterns from `patterns.md` directly

## 🤝 Contributing

When updating this documentation:

1. Keep it concise and practical
2. Include code examples
3. Update the date at the bottom of files
4. Test that examples work
5. Keep formatting consistent

## 📞 Getting Help

- Check existing documentation first
- Review `patterns.md` for examples
- Reference `architecture.md` for technical details
- Read `CLAUDE.md` for project overview
- Use slash commands for guided tasks

---

**Created**: 2025-10-09
**Last Updated**: 2025-10-09
**Maintained By**: Project team + Claude Code
